---
sidebar_label: Git
title: Git
---

You MUST fallow [Conventional Commits][conventional-commits] while adding commits to repository. This is backbone of whole automation system.

You MAY use script that simplify adding new commits by use of [commitizen's cz-cli][cz-cli](or do it manually):

```bash
npm run commit
```

**alias**:

```bash
npm run cz
```

Available options used by commitizen's **cz-cli** are defined in `.cz-config.js`.

This rule is enforced by use of [Husky][husky] and is defined as `commit-msg` hook in `.huskyrc` file.

[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[cz-cli]: https://github.com/commitizen/cz-cli
[husky]: https://github.com/typicode/husky
