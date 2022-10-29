import path from 'path'
import { fileURLToPath } from 'url'
import type { RollupOptions } from 'rollup'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import {
  terser,
} from 'rollup-plugin-terser'

const __filename = fileURLToPath(import.meta.url)

const paths = {
  input: path.join(__filename, './src/index.ts'),
  output: path.join(__filename, './lib'),
}

export default [
  {
    input: paths.input,
    output: [
      {
        file: path.join(paths.output, 'index.js'),
        format: 'es',
        name: 11,
      },
      {
        file: path.join(paths.output, 'index.cjs'),
        format: 'cjs',
        name: 22,
      },
    ],
    plugins: [
      babel(),
      commonjs(),
      terser(),
      typescript(),
    ],
  },
  {
    input: paths.input,
    output: [{ file: 'dist/my-library.d.ts', format: 'es' }],
    plugins: [dts()],
  },
] as RollupOptions
