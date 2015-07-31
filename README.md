# es6-boilerplate

Boilerplate repository for a transpiled ES2016 library.

Main source files are in `src/`, and get transpiled to `lib/`.

Tests are in `test-src/` and get transpiled to `test/`.

Compiled ES5 files are not pushes to git, and source ES6 files are not published to npm.

## npm scripts

### npm run build-src

Will compile source.

### npm run build-test

Will compile tests.

### npm run build

Will compile both source, and tests into ES5.

### npm test

Will build files, then start tests.
