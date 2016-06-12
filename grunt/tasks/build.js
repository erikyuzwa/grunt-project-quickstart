// build task - a task for handling the default build of your app
'use strict';

module.exports = function(grunt) {
  
  // `grunt build`
  grunt.registerTask('build', 'compile and minify source to build folder.', function() {
    grunt.task.run(['clean:build', 'copy:build']);
  });
  
};
