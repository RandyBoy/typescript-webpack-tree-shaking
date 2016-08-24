# Tree-shaking example with Typescript and Webpack

This repository shows how to configure Typescript and Webpack to enable tree-shaking for development and production builds.

It will eliminate dead code not used by other modules if they have ES2015 module format.

The source code can be found in the ```app/``` folder,
where the main file ```car.ts``` doesn't use all the dependencies from ```engine.ts```.
The built and transpiled files can be found in the ```/dist``` folder.

For development build run ```npm run webpack```.

For production build run ```npm run webpack-prod```.

### Requirements

- typescript >= 2.0.0-dev
- webpack >= 2.1.0-beta

### Known issues

When transpiling classes with Typescript, it generates an IIFE with an assignment to the prototype.
It is considered as a side effect by UglifyJS and it skips removing of it.

See the issues below:

- [Webpack issue](https://github.com/webpack/webpack/issues/2899)
- [UglifyJS issue](https://github.com/mishoo/UglifyJS2/issues/1261)