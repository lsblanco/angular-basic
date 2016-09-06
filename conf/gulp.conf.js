'use strict';

/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

const path = require('path');
const gutil = require('gulp-util');

exports.ngModule = 'app';
exports.configModule = 'app.config';

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  apidoc: 'docs/api',
  tmp: '.tmp',
  e2e: 'e2e',
  tasks: 'gulp'
};

/**
 *  The Coverage threshold of your project
 */
exports.coverage_threshold = {
  dev: {
    'statements': 80,
    'branches': 80,
    'functions': 80,
    'lines': 80 
  },
  pro: {
    'statements': 100,
    'branches': 100,
    'functions': 100,
    'lines': 100
  }
};

exports.titleApiDoc = 'angular-basic';

exports.path = {};
for (const pathName in exports.paths) {
  if (exports.paths.hasOwnProperty(pathName)) {
    exports.path[pathName] = function pathJoin() {
      const pathValue = exports.paths[pathName];
      const funcArgs = Array.prototype.slice.call(arguments);
      const joinArgs = [pathValue].concat(funcArgs);
      return path.join.apply(this, joinArgs);
    };
  }
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
  return function (err) {
    gutil.log(gutil.colors.red(`[${title}]`), err.toString());
    this.emit('end');
  };
};
/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/],
  directory: 'bower_components'
};
