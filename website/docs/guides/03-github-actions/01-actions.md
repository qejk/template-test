---
sidebar_label: Actions
title: Actions
---

Template has [Github][github] specific actions dedicated for releasing software with use of semantic-release. This streamlines process of creating software releases by lifting the burden of assigning appropriate version number that should always fallow [semver][semver].

Current configuration of semantic-release in `.releaserc` also generates automatically new entries in `CHANGELOG.md`.

Releases are done automatically after merging **Pull Request** against `master` with use of Github Actions.

However semantic-release is not compatible with [Git Flow][semantic-release-gitflow] - use [Git**hub** Flow][github-flow] instead(more on that later...)

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119][rfc-2119].

## Prerequisites

1. Branch names MUST fallow correct [Branch Naming Scheme](#branch-naming-scheme).
1. Commits MUST fallow [Conventional Commits][conventional-commits] while adding commits to repository. This is backbone of whole automation system with [semantic-release][semantic-release].
1. You MUST NOT add `CHANGELOG.md` entries manually, let machines do it.
1. You MUST NOT create releases(Github/npm etc.) manually, let machines do it.

Please fallow conventions above, otherwise - it makes your contribution **un-mergable**.

## Branch Naming Scheme

Branch naming convention MUST be fallowed and its based on top of [Conventional Commits][conventional-commits] for simplicity:

| type     | branch name                    |
| -------- | ------------------------------ |
| feature  | `feat/foo-123/my-feature`      |
| fix      | `fix/foo-123/my-fix`           |
| hotfix   | `hotfix/foo-123/my-hotfix`     |
| chore    | `chore/foo-123/my-chore`       |
| style    | `style/foo-123/my-style`       |
| docs     | `docs/foo-123/my-docs`         |
| refactor | `refactor/foo-123/my-refactor` |
| test     | `test/foo-123/my-test`         |

**Legend**:

`foo-123` - it references to **optional** _Project Key_, an identifier that is used to identify a scheduled change in tracking software like [Jira][jira], [YouTrack][youtrack] etc.

[rfc-2119]: https://tools.ietf.org/html/rfc2119
[github]: http://github.com
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[semantic-release]: https://github.com/semantic-release/semantic-release
[semver]: https://semver.org/
[semantic-release-gitflow]: https://github.com/semantic-release/semantic-release/issues/1231
[jira]: https://www.atlassian.com/software/jira
[youtrack]: https://www.jetbrains.com/youtrack/
[github-flow]: https://guides.github.com/introduction/flow/
