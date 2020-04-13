import ts from '@wessberg/rollup-plugin-ts';

import pkg, { dependencies, peerDependencies } from './package.json';

// Get all packages we are using
const deps = Object.keys({
  ...dependencies,
  ...peerDependencies
});

export default {
  input: 'src/index.ts',
  external: id => deps.some(d => d === id || d.startsWith(d + '/')),
  plugins: [
    ts({
      transpiler: 'babel',
      tsconfig: 'tsconfig.build.json'
    })
  ],
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    }
  ]
};
