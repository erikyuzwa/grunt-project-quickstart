// test task -
'use strict';

module.exports = function(grunt) {
  
  // `grunt test`
  grunt.registerTask('test', 'run karma test suite.', function() {
    grunt.task.run(['jshint:source']);
  });
};