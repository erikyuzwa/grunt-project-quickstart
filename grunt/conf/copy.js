
// copy.js
'use strict';


// copy.js
'use strict';

module.exports = function(grunt) {

  // Configurable paths for the application
  var pkg = grunt.file.readJSON('./package.json');
  
  return {

    // `grunt copy:dist`
    dist: {
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
      }, {
        expand: true,
        cwd: '.',
        src: 'package.electron.json',
        dest: 'build/',
        rename: function(dest, src) {
          return dest + src.replace('electron.json','json');
        }
      }]
    }
  };
};
