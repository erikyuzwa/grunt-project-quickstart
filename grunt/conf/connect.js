// connect.js
'use strict';

module.exports = function(grunt) {
  var serveStatic = require('serve-static');
  var pkg = grunt.file.readJSON('./package.json');

  return {
    options: {
      port: 9000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      livereload: 35729
    },
      
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            serveStatic('.tmp'),
            connect().use(
              '/app/styles',
              serveStatic('./app/styles')
            ),
            serveStatic('app')
          ];
        }
      }
    },
    
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            serveStatic('.tmp'),
            serveStatic('test'),
            serveStatic('app')
          ];
        }
      }
    }
    
  };
};