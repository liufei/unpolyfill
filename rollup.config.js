import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: pkg.module,
  output: {
    file: pkg.unpkg,
    format: 'iife',
  },
  plugins: [resolve(), commonjs(), terser()],
}
