---
sidebar_label: Package Scripts
title: Package Scripts
---

At any point of time you can learn more about available scripts by using `npm run explain` | `yarn explain`.

- `build` - Clean and build(bundle) the project with rollup
- `clean` - Clean dist folder
- `commit` - (alias) cz
- `coverage:ci` - Generate reports for CI
- `coverage:report` - Generate reports without displaying summary
- `coverage` - Run tests, then create and display generated report(always finishes successfully)
- `cz` - Add commit matching Conventional Commit specification
- `docs:watch` - Generate API markdown documentation that is outputted to Docusaurus in watch mode(so it can previewed on-fly(new files require reload of Docusaurus!))
- `docs:clean` - Remove auto-generated API from documentation
- `docs:build` - Generate API markdown documentation that is outputted to Docusaurus and build as static files ready for publish
- `docs` - Generates documentation and run it in browser
- `format` - Try to automatically fix any formatting problems
- `explain` - Display information about the package scripts(info is already taken by yarn)
- `lint` - Try to automatically fix any linting problems
- `prepare` - One-step: test(with coverage), lint, clean, build, and prep a release
- `setup` - Setup the template for new project
- `semantic-release` - Create release with semantic-release
- `reset` - Delete all untracked files and reset the repo to the last commit
- `test:coverage` - Run tests, then crete and display generated report(fails if requirement is not met)
- `test:format` - Validate formatting
- `test:integration:watch` - Watch and rebuild the project on save, then rerun relevant integration tests
- `test:integration` - Runs integrations tests
- `test:lint` - Validate linting
- `test:unit:watch` - Watch and rebuild the project on save, then rerun relevant unit tests
- `test:unit` - Runs unit tests
- `test:watch` - Watch and rebuild the project on save, then rerun relevant tests
- `test` - Run tests of the whole projec
