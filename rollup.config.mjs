import path from 'node:path';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

const extensions = ['.ts', '.js', '.mjs'];

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  external: (id) => !id.startsWith('.') && !path.isAbsolute(id),
  plugins: [
    resolve({ extensions }),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      babelHelpers: 'bundled',
      extensions,
      exclude: 'node_modules/**'
    })
  ]
};
