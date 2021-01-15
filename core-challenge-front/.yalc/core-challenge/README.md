# Introduction

`core-challenge` is a library built to help developers and designers to create consistent, beautiful and accessible digital products

# Development guide

## Setup

Install all the dependencies with `yarn install`.

## Building

To completely build the lib, run the `yarn prepare` command.

## Testing

The visual tests use Docker to run, so you will need it in order to run all the tests of the project.

- To run all the tests, run `yarn test`.
- To run the Jest tests, run `yarn test:jest`.

## Locally testing the library

To test the library with a local project (target project), we recommend using the library [yalc](https://www.npmjs.com/package/yalc): you can install it globally with `npm i -g yalc`.

After doing the changes you want, publish (this is a local publish) the library with `yalc publish` and install it in the target project with `yalc add core-chellenge`.

If you installed some dependency in the library, you will need to update the dependencies in your target project (`yarn install`) after running `yalc add`.



##URlLS:

https://24ways.org/2019/design-tokens-and-component-based-design/

