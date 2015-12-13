# React starter

[![Dependency Status](https://david-dm.org/flint7/react-starter.svg)](https://david-dm.org/flint7/react-starter)
[![devDependency Status](https://david-dm.org/flint7/react-starter/dev-status.svg)](https://david-dm.org/flint7/react-starter#info=devDependencies)

A simple reference implementation of [React](https://facebook.github.io/react/)/[Babel](https://babeljs.io/) using
[webpack](http://webpack.github.io/).

The project uses [babel-plugin-react-transform](https://github.com/gaearon/react-transform-boilerplate) to apply the
following transformations:

* React hot module replacement via [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
* Error reporting via [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)

Also included are:

* linting via [eslint](http://eslint.org/)


### To use the project

1. Clone the repository into a directory of your liking
1. Replace the content of `src/index.js` with the React component you are developing
1. Update the example page (`example/index.js`) to use your new component
1. Start the webpack dev server using `npm start`
1. Point your browser to `http://localhost:8080`

From here on any changes made to you React components should automatically update.
