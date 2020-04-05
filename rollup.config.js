import typescript from '@rollup/plugin-typescript';
import babel from 'rollup-plugin-babel';
import { dependencies, peerDependencies } from './package.json';

// Get all packages we are using
const deps = Object.keys({
  ...dependencies,
  ...peerDependencies
});

// ES Module config
const moduleConfig = {
  input: 'src/index.ts',
  external: id => deps.some(d => d === id || d.startsWith(d + '/')),
  plugins: [babel(), typescript()],
  output: [
    {
      file: 'lib/index.es.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true
    }
  ]
};

export default [
  moduleConfig
];
