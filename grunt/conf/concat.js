
// concat.js
'use strict';

module.exports = function(grunt) {
  return {
    // shared options
    options: {
      separator: ';'
    },

    // `grunt concat:build`
    build: {
      src: ['build/js/**/*.js'],
      dest: 'dist/js/<%=pkg.name%>.js'
    }
  };
};
