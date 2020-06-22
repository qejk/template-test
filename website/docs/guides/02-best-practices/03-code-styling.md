---
sidebar_label: Code styling
title: Code styling
---

You MUST NOT style your code manually, let machines do it:

```bash
npm run format
```

This uses underlying [prettier][prettier] dependency that will enforce rules defined in `.prettierrc`.

Styling code is prone to individual perception of clean looking code - this will in long term generate unnecessary styling differences, tensions between people that [can end relationships][silicon-valley]. Don't be "that" person.

Users SHOULD use extension for code editor of choice(for [Visual Studio Code][vscode] we recommend use [Prettier - Code formatter][vscode-prettier]). This will apply appropriate formatting directly in editor.

On top of that, you MUST always fallow code styling defined in `.editorconfig` with use of extension for code editor(for [Visual Studio Code][vscode] we recommend use [EditorConfig for VS Code][vscode-editor-config])

**Focus on delivering "Clean Code" - not "Styled Code".**

At any point of time code can be tested if its properly formatted:

```bash
npm run test:format
```

Styling is applied by use of [pretty-quick][pretty-quick] and [Husky][husky] and is defined as `pre-commit` hook in `.huskyrc` file.

### Linting

You MUST ensure that your code is passing linting with [ESLint][eslint].

This will lower the amount of bugs and inconsistencies over the whole code base:

```bash
npm run lint
```

The rules defined for ESLint are defined in `.eslintrc` file.

Users SHOULD use extension for code editor of choice(for [Visual Studio Code][vscode] we recommend use [ESLint][vscode-eslint]). This will enforce appropriate linting directly in editor.

At any point of time code can be tested if its properly linted:

```bash
npm run test:lint
```

[prettier]: https://prettier.io/
[silicon-valley]: https://www.youtube.com/watch?v=SsoOG6ZeyUI
[vscode]: https://code.visualstudio.com/
[vscode-prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[vscode-editor-config]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[pretty-quick]: https://github.com/azz/pretty-quick
[husky]: https://github.com/typicode/husky
[eslint]: https://eslint.org/
[vscode-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
