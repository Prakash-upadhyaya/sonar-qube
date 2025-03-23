module.exports = {
  preset: 'react-native',
  coverageDirectory: "./jest/coverage",
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  verbose: true,
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|react-navigation|react-native-screens|react-native-safe-area-context)/)"
  ]
};
