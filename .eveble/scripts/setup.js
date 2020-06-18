#!/usr/bin/env node

/*
Parts of code from https://github.com/react-boilerplate/react-boilerplate

The MIT License (MIT)

Copyright (c) 2019 Maximilian Stoiber

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

const shell = require('shelljs');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const readline = require('readline');
const compareVersions = require('compare-versions');
const chalk = require('chalk');
const inquirer = require('inquirer');

const animateProgress = require('./helpers/progress');
const addCheckMark = require('./helpers/checkmark');
const addXMark = require('./helpers/xmark');
const npmConfig = require('./helpers/get-npm-config');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');
let interval = -1;

/**
 * Deletes a file in the current directory
 * @param {string} file
 * @returns {Promise<any>}
 */
function deleteFileInCurrentDir(file) {
  return new Promise((resolve, reject) => {
    fs.unlink(path.join(__dirname, file), (err) => reject(new Error(err)));
    resolve();
  });
}

/**
 * Checks if we are under Git version control
 * @returns {Promise<boolean>}
 */
function hasGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git status', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      }

      const regex = new RegExp(/fatal:\s+Not\s+a\s+git\s+repository/, 'i');

      /* eslint-disable-next-line no-unused-expressions */
      regex.test(stdout) ? resolve(false) : resolve(true);
    });
  });
}

/**
 * Checks if this is a clone from our repo
 * @returns {Promise<any>}
 */
function checkIfRepositoryIsAClone() {
  return new Promise((resolve, reject) => {
    exec('git remote -v', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      }

      const isClonedRepo = stdout
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line.startsWith('origin'))
        .filter((line) =>
          /react-boilerplate\/react-boilerplate\.git/.test(line)
        ).length;

      resolve(!!isClonedRepo);
    });
  });
}

/**
 * Remove the current Git repository
 * @returns {Promise<any>}
 */
function removeGitRepository() {
  return new Promise((resolve, reject) => {
    try {
      shell.rm('-rf', '.git/');
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

/**
 * Ask user about starting new repository.
 * @returns {Promise<boolean>}
 */
async function askUserIfWeShouldRemoveRepo() {
  const answer = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'isNew',
      message: 'Do you want to start with a new repository',
      default: 'y',
    },
  ]);
  return answer.isNew;
}

/**
 * Checks if we are under Git version control.
 * If we are and this a clone of our repository the user is given a choice to
 * either keep it or start with a new repository.
 * @returns {Promise<boolean>}
 */
async function cleanCurrentRepository() {
  const hasGitRepo = await hasGitRepository().catch((reason) =>
    reportError(reason)
  );

  // We are not under Git version control. So, do nothing
  if (hasGitRepo === false) {
    return false;
  }

  const isClone = await checkIfRepositoryIsAClone().catch((reason) =>
    reportError(reason)
  );

  // Not our clone so do nothing
  if (isClone === false) {
    return false;
  }

  const answer = await askUserIfWeShouldRemoveRepo();

  if (answer === true) {
    process.stdout.write('Removing current repository');
    await removeGitRepository().catch((reason) => reportError(reason));
    addCheckMark();
  }

  return answer;
}

/**
 * Check Node.js version
 * @param {!number} minimalNodeVersion
 * @returns {Promise<any>}
 */
function checkNodeVersion(minimalNodeVersion) {
  return new Promise((resolve, reject) => {
    exec('node --version', (err, stdout) => {
      const nodeVersion = stdout.trim();
      if (err) {
        reject(new Error(err));
      } else if (compareVersions(nodeVersion, minimalNodeVersion) === -1) {
        reject(
          new Error(
            `You need Node.js v${minimalNodeVersion} or above but you have v${nodeVersion}`
          )
        );
      }

      resolve('Node version OK');
    });
  });
}

/**
 * Check NPM version
 * @param {!number} minimalNpmVersion
 * @returns {Promise<any>}
 */
function checkNpmVersion(minimalNpmVersion) {
  return new Promise((resolve, reject) => {
    exec('npm --version', (err, stdout) => {
      const npmVersion = stdout.trim();
      if (err) {
        reject(new Error(err));
      } else if (compareVersions(npmVersion, minimalNpmVersion) === -1) {
        reject(
          new Error(
            `You need NPM v${minimalNpmVersion} or above but you have v${npmVersion}`
          )
        );
      }

      resolve('NPM version OK');
    });
  });
}

/**
 * Install all packages
 * @param packageManager - One of: 'npm'|'yarn'|'pnpm'.
 * @returns {Promise<any>}
 */
function installPackages(packageManager) {
  return new Promise((resolve, reject) => {
    process.stdout.write(
      '\nInstalling dependencies... (This might take a while)\n'
    );

    setTimeout(() => {
      readline.cursorTo(process.stdout, 0);
      interval = animateProgress('Installing dependencies');
    }, 500);

    let execArgs;
    switch (packageManager) {
      case 'npm':
        execArgs = ['npm', 'install'];
        break;
      case 'yarn':
        execArgs = ['yarn', 'install'];
        break;
      case 'pnpm':
        execArgs = ['pnpm', 'install'];
        break;
      default:
        process.stderr.write(
          `Provided package manager '${packageManager}' is not supported`
        );
        break;
    }

    exec(execArgs.join(' '), (err) => {
      if (err) {
        reject(new Error(err));
      }

      clearInterval(interval);
      addCheckMark();
      resolve('Packages installed');
    });
  });
}

/**
 * Initialize a new Git repository
 * @returns {Promise<any>}
 */
function initGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git init', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(stdout);
      }
    });
  });
}

/**
 * Add all files to the new repository
 * @returns {Promise<any>}
 */
function addToGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git add .', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(stdout);
      }
    });
  });
}

/**
 * Initial Git commit
 * @returns {Promise<any>}
 */
function commitToGitRepository() {
  return new Promise((resolve, reject) => {
    exec('git commit -m "Initial commit"', (err, stdout) => {
      if (err) {
        reject(new Error(err));
      } else {
        resolve(stdout);
      }
    });
  });
}

/**
 * Report the the given error and exits the setup
 * @param {string} error
 */
function reportError(error) {
  clearInterval(interval);

  if (error) {
    process.stdout.write('\n\n');
    addXMark(() => process.stderr.write(chalk.red(` ${error}\n`)));
    process.exit(1);
  }
}

/**
 * End the setup process
 */
function endProcess() {
  clearInterval(interval);
  process.stdout.write(chalk.blue('\n\nDone!\n'));
  process.exit(0);
}

/**
 * Ask user about used package manager.
 * @returns {Promise<'npm'|'yarn'|'pnpm">}
 */
async function askUserAboutUsedPackageManager() {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'packageManager',
      message: 'Which package manager do you want to use',
      choices: ['npm', 'yarn', 'pnpm'],
      filter: function (val) {
        return val.toLowerCase();
      },
    },
  ]);
  return answer.packageManager;
}

/**
 * Ask user about project details.
 * @returns {Promise<Object>}
 */
async function askUserAboutProjectDetails() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: "What's the project name",
    },
    {
      type: 'input',
      name: 'description',
      message: "What's the project description",
    },
    {
      type: 'input',
      name: 'authorName',
      message: "Who's the project author",
    },
    {
      type: 'input',
      name: 'authorEmail',
      message: "What's the author's email",
    },
    {
      type: 'input',
      name: 'authorHomepage',
      message: "What's the author's homepage",
    },
    {
      type: 'input',
      name: 'homepage',
      message: "What's the project's homepage",
    },
    {
      type: 'input',
      name: 'bugs',
      message: "What's the project's Github issue page(bugs)",
    },
    {
      type: 'input',
      name: 'license',
      message: "What's the project's license",
      default: 'MIT',
    },
    {
      type: 'confirm',
      name: 'private',
      message: 'Do you want this repository to be private',
      default: 'y',
    },
  ];
  const answer = await inquirer.prompt(questions);
  answer.author = {
    name: answer.authorName,
    email: answer.authorEmail,
    url: answer.authorHomepage,
  };
  delete answer.authorName;
  delete answer.authorEmail;
  delete answer.authorHomepage;
  return answer;
}

/**
 * Assigns new project details to npm config(package.json).
 * @param {Object} projectDetails - New project details.
 */
function updateNpmConfig(projectDetails) {
  projectDetails.version = '0.0.0-development';
  const newNpmConfig = Object.assign({}, npmConfig, projectDetails);
  const stringifiedData = JSON.stringify(newNpmConfig, null, 2);
  fs.writeFileSync('./package.json', stringifiedData);
  fs.writeFileSync('./CHANGELOG.md', '');
  fs.writeFileSync('./LICENSE', '');
  fs.writeFileSync('./AUTHORS', '');
}

/**
 * Updates autogenerated documentation.
 * @returns {Promise<any>}
 */
function updateDocumentation() {
  const interval = animateProgress('Generating new documentation');
  return new Promise((resolve, reject) => {
    exec('npm run docs', (err, stdout) => {
      clearInterval(interval);
      if (err) {
        reject(new Error(err));
      } else {
        resolve(stdout);
      }
    });
  });
}

/**
 * Run
 */
(async () => {
  const repoRemoved = await cleanCurrentRepository();

  // Take the required Node.js and NPM version from package.json
  // Do not use semver with 'x' like '13.0.x'
  const {
    engines: { node, npm },
  } = npmConfig;

  const requiredNodeVersion = node.match(/([0-9.]+)/g)[0];
  await checkNodeVersion(requiredNodeVersion).catch((reason) =>
    reportError(reason)
  );

  const packageManager = await askUserAboutUsedPackageManager();
  const requiredNpmVersion = npm.match(/([0-9.]+)/g)[0];
  await checkNpmVersion(requiredNpmVersion).catch((reason) =>
    reportError(reason)
  );

  await installPackages(packageManager).catch((reason) => reportError(reason));
  await deleteFileInCurrentDir('setup.js').catch((reason) =>
    reportError(reason)
  );

  const projectDetails = await askUserAboutProjectDetails();
  updateNpmConfig(projectDetails);
  await updateDocumentation();

  if (repoRemoved) {
    process.stdout.write('\n');
    interval = animateProgress('Initializing new repository');
    process.stdout.write('Initializing new repository');

    try {
      await initGitRepository();
      await addToGitRepository();
      await commitToGitRepository();
    } catch (err) {
      reportError(err);
    }

    addCheckMark();
    clearInterval(interval);
  }

  endProcess();
})();
