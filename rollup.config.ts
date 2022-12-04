import type { RollupOptions } from 'rollup'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './lib/index.es.js',
        format: 'es',
      },
      {
        file: './lib/index.cjs.js',
        format: 'cjs',
      },
    ],
    plugins: [
      babel(),
      commonjs(),
      typescript(),
    ],
  },
  {
    input: './src/index.ts',
    output: [{ file: 'lib/types/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
] as RollupOptions
