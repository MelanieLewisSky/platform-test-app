/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export = {
  preset: "ts-jest/presets/js-with-ts",
  testMatch: ["**/test/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/node_modules/"],
  testEnvironment: "jest-environment-jsdom",
  // coverageReporters: ["text", "html", "cobertura"],
  // coverageThreshold: {
  //   global: {
  //     statements: 70,
  //     functions: 40,
  //     lines: 70,
  //   },
  // },
  transformIgnorePatterns: ["node_modules/(?!(@wte)/)"],
};

