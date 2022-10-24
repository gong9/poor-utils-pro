const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const typescript = require('rollup-plugin-typescript')
const {
  terser
} = require('rollup-plugin-terser')



module.exports = {
  input: './src/index.ts',
  output: {
    file: './lib/index.js',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    babel(),
    commonjs(),
    terser(),
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    })
  ]
}