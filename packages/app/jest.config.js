module.exports = {
  maxWorkers: 1,
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/__mocks__/file.js",
  },
  setupFiles: ["jest-webgl-canvas-mock"],
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    resources: "usable",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!@lightningjs/sdk?)/"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
