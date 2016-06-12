
// copy.js
'use strict';

module.exports = function(grunt) {

  // Configurable paths for the application
  var pkg = grunt.file.readJSON('./package.json');
  
  return {

    // `grunt copy:build`
    build: {
      files: [{
        expand: true,
        dot: true,
        cwd: 'app',
        dest: 'build',
        src: [
          '*.{ico,png,txt}',
          '*.*',
          'images/{,*/}*.{webp}',
          'styles/fonts/{,*/}*.*',
          'audio/{,*/}*.*',
          'vendor/{,*/}*.*',
          'scripts/**/*.js',
          'styles/**/*.css'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: 'build/images',
        src: ['generated/*']
      }]
    }
  };
};
