module.exports = {
  clearMocks: true,
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '^views(.*)$': '<rootDir>/src/views$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^types(.*)$': '<rootDir>/src/types$1',
    '\\.svg$': '<rootDir>/fileTransformer.js',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
}
