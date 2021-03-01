// @ts-check
import { DEFAULT_EXTENSIONS } from '@babel/core';
import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import reactSvg from 'rollup-plugin-react-svg';
import tsPlugin from 'rollup-plugin-typescript2';
import typescript from 'ttypescript';

import pkg, { dependencies, peerDependencies } from './package.json';

const deps = Object.keys({
  ...dependencies,
  ...peerDependencies
});

const config = (input, outputCjs, outputEsm) => ({
  input,
  external: id => id.includes("node_modules/") || deps.some(d => d === id || id.startsWith(d + "/")),
  plugins: [
    nodeResolve({
      moduleDirectories: ["node_modules", "src"]
    }),
    reactSvg({}),
    tsPlugin({ typescript }),
    babel({
      babelHelpers: "runtime",
      extensions: [
        ...DEFAULT_EXTENSIONS,
        ".ts",
        ".tsx"
      ]
    })
  ],
  output: [
    {
      file: outputCjs,
      format: "cjs",
      inlineDynamicImports: true,
      sourcemap: true
    },
    outputEsm && {
      file: outputEsm,
      format: "esm",
      inlineDynamicImports: true,
      sourcemap: true
    }
  ]
});

export default [
  config("./src/index.ts", pkg.main, pkg.module)
];
