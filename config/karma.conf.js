module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'assest/js/lib/angular.min.js',
      'assest/js/lib/angular-*.js',
      'assest/js/app/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'assest/js/lib/angular-loader.js',
      'assest/js/lib/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};
