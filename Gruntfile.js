
// Gruntfile.js
// main gateway to all things Grunt
'use strict';

module.exports = function(grunt) {
  
  require('time-grunt')(grunt);
  
  var path = require('path');
  
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), 'grunt/conf'),
    init: true,
    jitGrunt: {
      customTasksDir: 'grunt/tasks',
      staticMappings: {
        useminPrepare: 'grunt-usemin'
      }
    },
    data: {
      pkg: grunt.file.readJSON('./package.json')
    }
  });

  // we need a single task in the Gruntfile
  grunt.registerTask('default', 'Grunt.', function() {
    grunt.log.ok(grunt.config('pkg.name'));
    grunt.task.run(['serve']);
  });
};
