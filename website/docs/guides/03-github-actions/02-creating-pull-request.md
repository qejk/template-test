---
sidebar_label: Creating Pull Request
title: Creating Pull Request
---

1. Pull Request SHALL target _develop_ or _master_ branch(for large scale projects use _develop_ as the go-to branch for new features or other, non-_hotfixable_ changes that should be scheduled for upcoming releases and _master_ for medium sized libraries). You MAY also use other branches if you are fallowing specific release workflow.
2. Added title MUST describe the change that you want to implement and MUST exclude _project key_(i.e. `foo-123`), for example: `Add subtract`, `Document multiply`, `Bump lodash to 4.17.15`.
3. Adding Pull Request body MUST be initially omitted(its auto generated).
4. All [Github Actions][github-actions] MUST be successfully finished before any change is done to Pull Request. Sometimes it takes couple of seconds to start - don't be misled if this process is done immediately and successful.
5. New Pull Request's title MUST be auto-generated - it prefixes user's tile with _project key_(i.e. `[FOO-123] User's title set during creation`).
6. New Pull Request's body MUST be auto-generated with necessary template. For:

- fixes: `./.github/ISSUE_TEMPLATE/fix_template.md`
- default: `./.github/ISSUE_TEMPLATE/pull_request_template.md`

7. All automated actions that ensures Pull Request's mergeability MUST be finished successfully. You MUST ensure that labels are assigned to the Pull Request:

- _builds_ - ensures that PR changes can be build
- _formatted_ - ensures that PR changes are correctly styled
- _linted_ - ensures that PR changes are linted
- _conventional_ - ensures that commits fallow [Conventional Commits][conventional-commits]convention
- _tested_ - ensures that all tests are passing
- _covered_ - ensures that tests matches [coverage thresholds][coverage-thresholds]
- _documented_ - ensures that documentation can be build(`npm run docs:build`)

8. Adding additional reviewers is RECOMMENDED.
9. Pull Request's body MUST be filled with additional information that depends on the type(`fix`/`default`) - i.e. description(s) of the change.
10. All required steps included in _Review Checklist_ MUST be completed before merging Pull Request.
11. Once all steps are completed - Pull Request MAY be merged.

## `update-pr.yml` Action

When any `opened` **Pull Request** type runs(**`update-pr.yml`**):

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

## `pr.yml` Action

When any `opened`, `reopened`, or `synchronize` **Pull Request** type runs(**`pr.yml`**):

1. Assign it to `reviewers` based on `./.github/auto_assign.yml` (**add_reviewers**)
2. Check code for misspells (**misspell**)
3. Lint for [conventional commits][conventional-commits] (**lint_commits**)

- Label with _conventional_ if passing

4. Run tests with `yarn test` on multiple node versions(if defined)(**test_unit**)

- Label with _tested_ if passing

5. Test code with `yarn test:coverage` && `yarn coverage:ci` (**validate_test_coverage**)

- Label with _covered_ if passing

6. Test code with eslint reviewdog and report back(**test_lint**)

- Label with _linted_ if passing and on inner workspace

7. Check format of code with `yarn test:format`(**format**)

- If `yarn test:format` is successful:
  - Label with _formatted_
- If `yarn test:format` fails:
  - Run `yarn format`
  - Clean build files with `yarn clean`
  - Commit the format changes as `github-actions[bot]` to **Pull Request** head
  - Label with _formatted_

8. Assign authors to `AUTHORS` file if necessary and commits changes as `github-actions[bot]`
9. Build code with `yarn build`(**build**)

- Label with _builds_ if passing

9. Build documentation with `yarn docs:build`(**build**)

- Label with _documented_ if passing

[github-actions]: https://github.com/features/actions
[conventional-commits]: https://www.conventionalcommits.org/
[coverage-thresholds]: ../02-best-practices/05-testing#code-coverage
