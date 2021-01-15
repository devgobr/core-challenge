import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';
import visualizer from 'rollup-plugin-visualizer';
import json from '@rollup/plugin-json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const localModules = ['~tokens'];

const baseConfig = (moduleName, { useESModules }) => ({
  external: [...localModules],
  plugins: [
    json(),
    autoExternal(),
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      include: ['src/**/*'],
      babelHelpers: 'runtime',
      plugins: [
        [
          '@babel/plugin-transform-runtime',
          { helpers: true, regenerator: true, useESModules },
        ],
      ],
    }),
    visualizer({ filename: `bundle_stats/${moduleName}.html` }),
  ],
});

const createConfigsForModule = moduleName => [
  {
    ...baseConfig(moduleName, { useESModules: true }),
    input: `./src/${moduleName}/index.ts`,
    output: {
      file: `${moduleName}/dist/core-challenge-${moduleName}.esm.js`,
      format: 'esm',
    },
  },
  {
    ...baseConfig(moduleName, { useESModules: false }),
    input: `./src/${moduleName}/index.ts`,
    output: {
      file: `${moduleName}/dist/core-challenge-${moduleName}.cjs.js`,
      format: 'cjs',
    },
  },
];

export default [
  ...createConfigsForModule('components'),
  ...createConfigsForModule('tokens'),
];
