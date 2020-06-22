<img src="https://dummyimage.com/1116x324/000/fff&text=Banner" alt="banner" align="center" />

<br />
<br />

<div align="center"><strong>Start your next eveble project in seconds</strong></div>
<div align="center">Eveble dedicated development environment for building fast, robust projects or framework extensions(i.e. dependencies) with best industry standard practices in places</div>

<br />

## Requirements

- [Node.js](https://nodejs.org/en/) MUST be v14.0 or later.

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

2.  Set Github repository _Secrets_ for [Github Actions](https://github.com/features/actions):

- `NPM_TOKEN` - Secret generated in [npm's Auth Tokens](https://www.npmjs.com/)
- `PROJECT_KEY_PATTERN` - Pattern matching project key used by issue tracking software(i.e. like `FOO-13`), for example:

```lang-regex
[a-zA-Z0-9_]{3}-[\d]+
```

- `TICKET_URL` - URL that points out to issue tracking software like: `https://jira.yourdomain.com/browse/`

5. Ensure that branch `gh-pages` is set for Github Pages.
6. Ensure that `LICENSE` file is updated to appropriate one.
7. **Ensure that private projects are not released publicly by accident.**

## Now what?

If you're curious to learn more about template, continue on to the [best practices](git.md).

> Please note that the current state of documentation is not meant for beginners. It will be improved in next revisions.
