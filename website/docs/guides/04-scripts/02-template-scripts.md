---
sidebar_label: Template Scripts
title: Template Scripts
---

## Setup `./.eveble/scripts/setup.js`

Script is responsible for setting up repository for new project:

1. User will be asked to start with a new repository - if `y`, current `.git` folder will be removed. If you're contributing to this project - please type `n`.
2. Selection of required package manager: `npm` | `yarn` | `pnpm` will be available for installing dependencies.
3. New repository will be initialized.
4. Details about the project in `package.json` will changed automatically:

- `version` will be set to `0.0.0-development`(for automatic release with [sematic-release](https://github.com/semantic-release/semantic-release))
  and other values will be set based on user input:
- `name`
- `description`
- `author.name`
- `author.email`
- `author.homepage`
- `homepage`
- `bugs`
- `license`
- `private`

5. `CHANGELOG.md` will be erased.
6. `LICENSE` will be erased.
7. `AUTHORS` will be erased.
8. Documentation will be updated to reflect new package details(thus changing automatically `baseUrl` and `url` so documentation can be uploaded to Github Pages).

## Documentation `./.eveble/scripts/docs.js`

Script is responsible for generating `project.json` file under `./website/.eveble/project.json`.

This file is used by Docusaurus to establish correct `url` and `baseUrl` for documentation published under Github Pages(`gh-pages`) from `package.json` and define additional information about the project.

Also it builds up markdown normalized file paths for API(under `./website/docs/api`) and guides `./website/docs/guides`) that are used by Docusaurus so there is no requirement to do this manually by user.

**Its worth to mention that using numbered prefix fallowed by dash(i.e. `0-the-basics`) allows to creating an ordered list of categoriazed markdown files that later on will be consumed over _Docs_**

This streamlines the process of setting up documentation manually that can be a tedious process for larger scale projects using multiple libraries.

Its worth mentioning that its best to use object as value for `author` property in `package.json` so its easier for parsing:

```json
{
  "author": {
    "name": "Jane Doe",
    "email": "jane@doe.com",
    "url": "http://janedoe.com"
  }
}
```
