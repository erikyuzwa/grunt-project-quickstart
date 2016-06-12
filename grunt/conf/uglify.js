
// uglify.js
'use strict';

module.exports = function(grunt) {
  return {
    // shared options
    options: {
      banner: '/*! <%= pkg.name %> - <%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
    },

    // grunt uglify:build
    build: {
      sourceMap: false,
      files: {
        'dist/js/<%= pkg.name %>.min.js': ['dist/js/<%= pkg.name %>.js']
      }
    }
  };
};
