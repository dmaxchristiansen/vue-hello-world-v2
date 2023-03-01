# Vue.js v2 Sandbox

## Quick Start 🚀

```sh
git clone https://github.com/dmaxchristiansen/vue-hello-world-v2.git
cd vue-hello-world-v2
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

<br/>

## Contributing 🧑🏽‍💻

### Branch Names

Branch off of **main** for local development. Please ensure your local version of **main** is current with the remote.

Your branch name **must be prepended with VHW2-** followed by the corresponding GitHub issue number. For example:

```sh
git checkout -b VHW2-87
```

Create an issue on [this repository's project board](https://github.com/users/dmaxchristiansen/projects/3/) to obtain an issue number.

### Commits

Commit messages **must begin with a reference to the branch name**. For example:

```sh
git commit -m "VHW2-87 Abstract foo method to utils file"
```

Linting and formatting of staged files, as well as branch name and commit message syntax enforcement, is executed via husky pre-commit hooks. 

<br/>

## Testing 🧪

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

In one terminal tab run:

```sh
npm run dev
```

After the dev server is built, in another terminal tab run:

```sh
npm run cy:open
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
coming soon...
```
