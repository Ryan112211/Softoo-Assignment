import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // ts-jest options
        isolatedModules: true, // Disables type-checking when running tests
      },
    ],
  },
};

export default config;
