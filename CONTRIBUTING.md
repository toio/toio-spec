# Contributing to toio-spec

<!-- TOC depthFrom:2 depthTo:3 -->

## Environment

- Node.js >= v8.0.0
- Yarn

### Docusaurus

toio-spec adopted [Docusaurus](https://docusaurus.io) as a website generator.

### CI

&lt;TBD&gt;

## File structure

```
toio-spec/
  |- docs/                # All technical documents are here as markdown text.
  |- website/             # is for the website and follows the way of Docusaurus.
  |
  |- LICENSE              # describes license information for this repository.
  |- README.md
  |- CONTRIBUTING.md
  |- CODE_OF_CONDUCT.md
  |- CHANGELOG-cube.md    # Cube's changelog linked from version page of website.
  |- prh.yml              # Configuration file of 'textlint-rule-prh'
  |- package.json
  `- yarn.lock
```

### Notice

toio-spec is Japanese website and currently only have Japanese contents.
Docusaurus supports multi language documents and English is default one.
To serve Japanese website with Docusaurus, we put some Japanese contents under `website/pages/en`.
We are planning to improve this with Docusaurus v2.

## Development workflow

### Initial setup

1. `cd <project root>`
1. `yarn` to install dependency
1. `cd website && yarn` to install dependency for website

### Build and serve website locally

To check the documents as a website, execute the following command in the `website` directory.

```
yarn start
```

### Lint

We use [TextLint](https://textlint.github.io/) for linting our documents.
Please execute the following command in the project root.

```
yarn lint
```

## Branch Strategy

We adopted [GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html). (Only release process is customized.)

- simple workflow
- master is always stable and releasable
- human readable branch name
- merge master via PR

## License

By contributing to toio-spec, you agree that your contributions will be licensed as follows:

- CC BY 4.0 for the documents (mainly under `docs/` directory)
- CC BY-ND 4.0 for the image files (mainly under `docs/assets` and `website/static/img`)
- MIT license for the other contributions

Please see [LICENSE file](./LICENSE) for details.
