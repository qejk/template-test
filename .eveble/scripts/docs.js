const fs = require('fs');
const path = require('path');
const paths = {
  classes: './website/docs/api/classes',
  interfaces: './website/docs/api/interfaces',
  guides: './website/docs/guides',
};
const package = JSON.parse(fs.readFileSync('package.json', 'utf8'));

/**
 * Normalizes path for Docusaurus.
 * @param {string} path - Path to markdown file.
 * @returns {string} Normalized path compatible with Docusaurus
 */
function normalizePathForDocusaurus(path) {
  return path.replace('.md', '').replace('website/docs/', '');
}

/**
 * Lists all files recursively in directory.
 * @param {string} dir - Path of directory.
 * @param {Object} list - List of files with subdirectories.
 * @param {string} subDir - Subdirectory name.
 * @return {Object} List of all files.
 */
function listFilesInDir(dir, list = {}, subDir = undefined) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const fileStat = fs.lstatSync(filePath);

    if (fileStat.isDirectory()) {
      const subDir = file;
      if (list[subDir] === undefined) {
        list[subDir] = [];
      }
      listFilesInDir(filePath, list, subDir);
    } else {
      if (subDir !== undefined) {
        list[subDir].push(normalizePathForDocusaurus(filePath));
      } else {
        list.push(normalizePathForDocusaurus(filePath));
      }
    }
  });

  return list;
}

/**
 * Changes case of string to 'Title Case'.
 * @param {string} str - String to change.
 * @return {string} Changed string.
 */
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

/**
 * Normalizes directory names on root.
 * @param {Object} list - List of files with subdirectories.
 * @param {Object} Normalized list.
 */
function normalizeRootDirs(list) {
  const normalized = {};
  for (const [category, filesPaths] of Object.entries(list)) {
    normalized[
      titleCase(category.replace('-', ' ').replace(/\d+/, '').trim())
    ] = filesPaths;
  }
  return normalized;
}

/**
 * Normalizes path for sidebar.
 * @param {string} path - Path to markdown file.
 * @return {string} Normalized path.
 */
function normalizePathForSidebar(path) {
  return path.replace('./website/docs/', '').replace('.md', '');
}
3;

const project = {};
project.title = package.name;
project.tagline = package.description;
project.url = package.homepage; // URL to documentation
project.organizationName = package.author.name;
project.projectName = package.name;
project.organizationUrl = package.author.url;
project.projectUrl = package.repository.url
  .replace('.git', '')
  .replace('git', 'https');
project.license = package.license;

// API classes files
const classesFiles = fs.readdirSync(paths.classes);
project.apiPathTo = `${paths.classes
  .replace('website/', '')
  .replace(/^\.\//, '')}/${classesFiles[0].replace('.md', '')}`;
project.classes = classesFiles.map((path) => {
  return normalizePathForSidebar(`${paths.classes}/${path}`);
});

// API interfaces files
const interfacesFiles = fs.readdirSync(paths.interfaces);
project.interfaces = interfacesFiles.map((path) => {
  return normalizePathForSidebar(`${paths.interfaces}/${path}`);
});
// Guide files
project.guides = normalizeRootDirs(listFilesInDir(paths.guides, {}));

const stringifiedData = JSON.stringify(project, null, 2);
fs.writeFileSync('./website/.eveble/project.json', stringifiedData);
