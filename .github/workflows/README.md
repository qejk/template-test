## Table of Contents

- [Pull Request Workflow](#pull-request-workflow)
- [Branch Naming Scheme](#branch-naming-scheme)
- [Setup](#setup)
- [Creating Pull Request](#creating-pull-request)

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

## Change Workflow

##### Prerequisites

1. Branch names MUST fallowing correct [Branch Naming Scheme](#branch-naming-scheme).
2. Commits MUST fallow [Conventional Commits](https://www.conventionalcommits.org/) syntax.

Please fallow conventions above, otherwise - it makes your contribution **un-mergable**(we automate our releases). Sorry and thank you!

##### Creation

1. Pull Request SHALL target _develop_ or _master_ branch(for large scale projects use _develop_ as the go-to branch for new features or other, non-_hotfixable_ changes that should be scheduled for upcoming releases and _master_ for medium sized libraries). You MAY also use other branches if you are fallowing specific release workflow.
2. Added title MUST describe the change that you want to implement and MUST exclude _project key_(i.e. `foo-123`).
3. Adding Pull Request body MUST be initially omitted(its auto generated).
4. All [Github Actions](https://github.com/features/actions) MUST be successfully finished before any change is done to Pull Request. Sometimes it takes couple of seconds to start - don't be misled if this process is done immediately and successful.
5. New Pull Request's title MUST be auto-generated - it prefixes user's tile with _project key_(i.e. `[FOO-123] User's title set during creation`).
6. New Pull Request's body MUST be auto-generated with necessary template. For:

- fixes: `./.github/ISSUE_TEMPLATE/fix_template.md`
- default: `./.github/ISSUE_TEMPLATE/pull_request_template.md`

7. All automated actions that ensures Pull Request's mergeability MUST be finished successfully. You MUST ensure that labels: _builds_, _formatted_, _linted_, _linted: commits_, _tested:integration_, _tested:unit_, _covered_, are assigned to the Pull Request.
8. Adding additional reviewers is RECOMMENDED.
9. Pull Request's body MUST be filled with additional information that depends on the type(`fix`/`default`) - i.e. description(s) of the change.
10. All required steps included in _Review Checklist_ MUST be completed before merging Pull Request.
11. Once all steps are completed - Pull Request MAY be merged.

## Release Workflow

1. Once merged into _develop_ more features, fixes, chores, refactors etc. MAY be added - it reassembles flow of [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/)(however, we let our releases to be handled by machines with use of [semantic-release](https://github.com/semantic-release/semantic-release)). This workflow is compatible with [Github Flow](https://guides.github.com/introduction/flow/) - and MAY be used instead(by pushing changes directly to _master_ branch - if so, go directly to point 3)
2. After all necessary changes are pushed to _develop_ - you MAY decide to use current branch state for release by targeting _master_ - or use _next_, _alpha_, _beta_ for better release control.
3. Merging releasable branch into _master_ will run unit tests, integration tests, lint the code(and provide output if necessary), update the `AUTHORS` file, and run `build`.
   If release is possible then this will create a Pull Request from the v\*\* branch to master and a comment will be made on the original Pull Request notifying contributors. If there is not a release the changes will be pushed to master.
4. Once merged this time [semantic-release](https://github.com/semantic-release/semantic-release) will run to create the Github Release, release notes, changelog, notify Slack, package and deploy to NPM and Github Package Repo, label the release, and notify any issues of it's deployment.
5. After user semantic-release-bot commits the release commit, this code will be pushed to the release branch under `release/0.0.0`.

## Branch Naming Scheme

Branch naming convention MUST be fallowed and its based on top of [Conventional Commits](https://www.conventionalcommits.org/) for simplicity:

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

##### Legend:

`foo-123` - it references to **optional** `Project Key`, an identifier that is used to identify a scheduled change in tracking software like [Jira](https://www.atlassian.com/software/jira), [YouTrack](https://www.jetbrains.com/youtrack/) etc.

## Pull Request

- When any `labeled`, or `closed` **Pull Request** type runs on _master_, _develop_, _next_, _alpha_, or _beta_(**automerge.yml**):
  - If labels are present: _linted_, _tested:unit_, _tested:integration_, _builds_, _formatted_, _conventional_, _covered_ and not _hold merge_ or _automated merge_:
    - Merge the PR and add the _automated merge_ label
      - If failure, put some output on the original PR.
      - Notify original author.

&nbsp;

- When any `opened`, `reopened`, or `synchronize` **Pull Request** type runs(**`pr.yml`**):
  1. Assign it to [@desivi](https://github.com/desivi) (**add_reviewers**)
  2. Check code for misspells (**misspell**)
  3. Lint for [conventional commits](https://www.conventionalcommits.org/) (**lint_commits**)
  - Label with _conventional_ if passing
  3. Run unit tests with `yarn test:unit` on multiple node versions(**test_unit**)
  - Label with _tested:unit_ if passing
  4. Run integration tests with `yarn test:integration` on multiple node versions(**test_integration**)
  - Label with _tested:integration_ if passing
  5. Test code with `yarn test:coverage` && `yarn coverage:ci` (**validate_test_coverage**)
  - Label with _covered_ if passing
  7. Test code with eslint reviewdog and report back(**test_lint**)
  - Label with _linted_ if passing and on inner workspace
  8. Check format of code with `yarn test:format`(**format_check_push**)
  - If `yarn test:format` is successful:
    - Label with \_formatted`
  - If `yarn test:format` fails:
    - Run `yarn format`
    - Clean build files with `yarn clean`
    - Commit the format changes as `github-actions[bot]` to **Pull Request** head
    - Label with \_formatted`
  6. Build code with `yarn build`(**build**)
  - Label with _builds_ if passing

## Updating Pull Request

- When any `opened` **Pull Request** type runs(**`update-pr.yml`**):
  1. Apply labels to PRs based on branch name patterns from `./.github/pr-labeler.yml`
  2. Formats Pull Request for `fix` type:
  - If label `fix` is assigned:
    - Reads Pull Request body template from `./.github/ISSUE_TEMPLATE/fix_template.md`
    - Updates Pull Request information by `tzkhan/pr-update-action`
      - Prefixes PR title with _project key_ i.e. [FOO]
      - Adds PR body based on `fix` template
  - Else:
    - Reads Pull Request body template from `./.github/ISSUE_TEMPLATE/pull_request_template.md`
    - Updates Pull Request information by `tzkhan/pr-update-action`
      - Prefixes PR title with _project key_ i.e. [FOO]
      - Adds PR body based on `pull_request` template

## Synchronizing labels

- When any `push` is made to _master_ branch labels are synchronized from `./.github/labels.yml` file.

## Setup

1. Ensure that repository is properly configured to work with the automated workflow(look at [Setup](#setup) to for more information).
   Only allow squash merging of pull requests
