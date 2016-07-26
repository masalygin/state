// Karma configuration
// Generated on Fri Jul 22 2016 01:36:45 GMT+0300 (MSK)

module.exports = function (config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'chai', 'commonjs'],

    files: [
      'src/**/*.js',
      'test/**/*.js'
    ],


    preprocessors: {
      'src/**/*.js': ['babel', 'commonjs', 'coverage'],
      'test/**/*.js': ['babel', 'commonjs', 'coverage']
    },


    reporters: ['progress', 'coverage'],

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
      subdir: '.'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
};
