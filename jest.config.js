module.exports = {
  preset: '@testing-library/react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    'utils/index.ts',
    'theme/index.ts',
    'context/index.tsx',
    'assets/',
    'components/loader/index.tsx',
    'components/loader/styles.ts',
  ],
};
