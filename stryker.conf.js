const path = require('path');

module.exports = {
  mutate: [
    'src/**/*.js',
    '!src/spec/**/*.js'
  ],
    testRunner: 'jest',
    jest: {
    config: require(path.resolve(__dirname, './jest.conf.js')),
  },
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'off',
  thresholds: { high: 100, low: 80, break: 100 },
};
