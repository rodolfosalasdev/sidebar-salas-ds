/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: [
    require.resolve('@angular-builders/jest/dist/jest-config/setup-zoneless.js'),
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': require.resolve(
      '@angular-builders/jest/dist/jest-config/mock-module.js'
    ),
  },
  testMatch: ['**/*.spec.ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.spec.ts',
    '!src/main.ts',
    '!src/**/*.routes.ts',
    '!src/**/*.config.ts',
  ],
};
