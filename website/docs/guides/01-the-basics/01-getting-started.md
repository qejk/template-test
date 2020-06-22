---
sidebar_label: Getting started
title: Getting started
---

[Eveble-boilerplate][project-link] enables you to start your next [Eveble][eveble] project in seconds.

It setups development environment for building fast, robust projects or framework extensions(i.e. dependencies) with best industry standard practices in places.

## Requirements

- [Node.js][nodejs] MUST be v14.0 or later.

## Quick start

```bash
# Clone the repository
$ git clone https://github.com/eveble/eveble-boilerplate.git <YOUR_PROJECT_NAME>
# Go into the repository
$ cd <YOUR_PROJECT_NAME>
# Run setup
$ npm run setup
```

1.  Setup script will install dependencies, clean the template for new project and set new project details.
    Please remember to define `homepage` url during setup that MUST be **pointing to the documentation on Github Pages**:
    `https://_username_.github.io/_package-name_/`

2.  Set Github repository _Secrets_ for [Github Actions][github-actions]:

- `NPM_TOKEN` - Secret generated in [npm's Auth Tokens][nodejs]
- `PROJECT_KEY_PATTERN` - Pattern matching project key used by issue tracking software(i.e. like `FOO-13`), for example:

```lang-regex
[a-zA-Z0-9_]{3}-[\d]+
```

- `TICKET_URL` - URL that points out to issue tracking software like: `https://jira.yourdomain.com/browse/`

5. Ensure that branch `gh-pages` is set for Github Pages.
6. Ensure that `LICENSE` file is updated to appropriate one.
7. **Ensure that private projects are not released publicly by accident.**

## Now what?

If you're curious to learn more about template, continue on to the [best practices][next].

[project-link]: http://eveble.github.io/eveble-boilerplate
[eveble]: http://eveble.com
[nodejs]: https://nodejs.org/
[github-actions]: https://github.com/features/actions
[npm-auth-tokens]: https://www.npmjs.com/
[next]: ../02-best-practices/introduction
