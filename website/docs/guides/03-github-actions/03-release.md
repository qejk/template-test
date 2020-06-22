---
sidebar_label: Release Workflow
title: Release Workflow
---

1. Once Pull Request is merged into _develop_ - more features, fixes, chores, refactors etc. MAY be added - it reassembles flow of [Git Flow][git-flow](however, we let our releases to be handled by machines with use of [semantic-release][semantic-release]). This workflow is compatible with [Github Flow][github-flow] - and MAY be used instead(by pushing changes directly to _master_ branch - if so, go directly to point 3)
2. After all necessary changes are pushed to _develop_ - you MAY decide to use current branch state for release by targeting _master_ - or use _next_, _alpha_, _beta_ for better release control.
3. Merging releasable branch into _master_ will run tests, lint the code(and provide output if necessary), build the documentation and code.
4. Once merged this time [semantic-release][semantic-release] will run to create the Github Release, release notes, new entries to `CHANGELOG`, notify Slack, package and deploy to NPM and Github Package Repo, label the release, and notify any issues of it's deployment.
5. After semantic-release-bot commits the release commit, this code will be pushed to the release branch under `release/0.0.0`.

[git-flow]: https://danielkummer.github.io/git-flow-cheatsheet/
[semantic-release]: https://github.com/semantic-release/semantic-release
[github-flow]: https://guides.github.com/introduction/flow/
