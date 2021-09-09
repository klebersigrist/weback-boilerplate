const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, './'),
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  collectCoverage: true,
  coverageDirectory: process.env.JEST_CLOVER_OUTPUT_DIR || './coverage',
  coverageReporters: ['text', 'clover', 'lcov'],
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/spec/**/*.js',
  ],
  moduleFileExtensions: [
    'js',
  ],
};
