// This file isn't transpile, so must use CommomJS and ES5
// Register babel to transpile before our test run

var chalk = require('chalk');

console.log(chalk.green('Tests are been setup in this file...')) //eslint-disable-line no-console

require('@babel/register')();
// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
