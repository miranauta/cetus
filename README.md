# Mira Cetus

> Mira Design System.


## Docs

The documentation is generated from [Markdown][md] files inside `docs`
directory and published in the Github sites:

[https://miraeducation.github.io/cetus/][mira-ds]


## Tokens

### Dependencies

* Node 10

_We recommend install the Node using [NVM][nvm]._


### Development

Clone this repository, then run:

```shell
npm install
npm run build
```

#### Building only tokens

```shell
npm run build:tokens
```

#### Building only assets

```shell
npm run build:assets
```


### Jenkins Pipeline

We have a [Jenkins pipeline][pipeline] to build tokens. Access the pipeline
with your Mira Google Account, then click on the **Build with Parameters** menu
item.

#### Parameters

**TOKENS\_BRANCH**: This string parameter accepts a branch name that contains
the tokens. (Used only when `RELEASE_BRANCH=staging`)

**RELEASE\_BRANCH**: This choice parameter accepts a release branch name. When
**staging** is selected, the build accepts a `TOKENS_BRANCH` and the branch
called **staging** is force\* updated with tokens from `TOKENS_BRANCH`. When
**release** is selected, the `TOKENS_BRANCH` is ignored and **release** branch
is updated with tokens from **master** branch.

_\* When we build the staging, all things in the branch are discarded.
Literally is executed a `git push -f` to update the staging branch._

**SEMVER\_LEVEL**: This choice parameter accepts a [Semantic version][semver]
level and increases a version. (Used only when `RELEASE_BRANCH=release`)

**RELEASE\_TEXT**: This text parameter accepts a release text. (Used only when
`RELEASE_BRANCH=release`)

**CLEAN\_WORKSPACE**: This boolean parameter indicates that all previous
code will be removed to make a clean build. This is useful to ensures that the
build is clean, but this increases a build time.



[nvm]: https://github.com/creationix/nvm
[pipeline]: http://deploy.miraeducacao.com.br/job/design-system/job/design-system-build/
[semver]: https://semver.org/
[md]: https://guides.github.com/features/mastering-markdown/
[mira-ds]: https://miraeducation.github.io/cetus/
