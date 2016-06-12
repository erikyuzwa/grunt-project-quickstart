
// karma.conf.js
'use strict';

module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      
      // TODO update this section with any libraries you add to bower
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/lodash/lodash.js',
      
      // TODO update with your app scripts
      'app/scripts/**/*.js',
      
      // your tests are in the test/spec folder path
      'test/spec/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    plugins : [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
