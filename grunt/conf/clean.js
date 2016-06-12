
// clean.js - use this to clean up any temp or build files
'use strict';

module.exports = function(grunt) {
  return {
    // `grunt clean:build`
    build: ['build/**/*'],

    // `grunt clean:dist`
    dist: ['dist/**/*']
  };
};
