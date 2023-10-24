import type { JestConfigWithTsJest } from "ts-jest";

import baseJestConfig from "../../jest.config.base";

const asSettingsJestConfig: JestConfigWithTsJest = {
  ...baseJestConfig,
};

export default asSettingsJestConfig;
