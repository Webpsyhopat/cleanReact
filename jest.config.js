module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  slowTestThreshold: 5,
  testEnvironment: 'jsdom',
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  verbose: true,
  watchman: false,
  setupFilesAfterEnv: ['<rootDir>/src/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx'
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '.\\.(jpg|jpeg|png|gif|svg|ttf|mp4)$': '<rootDir>/__mocks__/file-mock.js'
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src']
  // The root directory that Jest should scan for tests and modules within
  // rootDir: undefined
  // This option sets the URL for the jsdom environment.
  // It is reflected in properties such as location.href
  // testURL: "http://localhost",
}
