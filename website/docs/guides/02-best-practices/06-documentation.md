---
sidebar_label: Documentation
title: Documentation
---

## Browser

Template allows for having auto-generated documentation of out the box:

```bash
npm run docs
```

The best practice is always to document the code directly with use of [tsdoc][tsdoc] notation. It allows for auto-generating API documentation with use of [TypeDoc][typedoc]([notation][typedoc-notation]) that is configured on `typedoc.json` to output markdown files - instead of _html_ with use of [tgreyuk/typedoc-plugin-markdown][typedoc-plugin-markdown].

This files are outputted to [Docusaurus][docusaurus] `./website/docs/api` folder for direct consumption.

Additional steps are taken to generate project details and new paths for api files with use of `./eveble/scripts/docs.js`.

Documentation with use of Docusaurus then is started in browser.

## Static(build)

Since [Docusaurus][docusaurus] library uses React under the hood, building static version of documentation that can be directly published to Github Pages is MUST:

```bash
npm run docs:build
```

## Watch

If documentation is written side by side while developing code, there is option to directly watch for any change in API and outputting it to Docusaurus by use of:

```bash
npm run docs:watch
```

However additional console or use of [PM2][pm2] is required to run Docusaurus:

```bash
cd website && npm run start
```

However it has it own limitation, since adding new component(ergo new API files) will require rebuilding file paths with use of `npm run docs` first.

This is done by use of [Gulp][gulp] that watches for any changes in `src/**/*.ts` files from `gulpfile.js`.

[tsdoc]: https://github.com/microsoft/tsdoc
[typedoc]: https://typedoc.org/
[typedoc-notation]: https://typedoc.org/guides/doccomments/
[typedoc-plugin-markdown]: https://github.com/tgreyuk/typedoc-plugin-markdown
[docusaurus]: https://docusaurus.io/
[pm2]: https://pm2.keymetrics.io/
[gulp]: https://gulpjs.com/
