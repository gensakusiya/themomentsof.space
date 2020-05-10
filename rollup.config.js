import { terser } from 'rollup-plugin-terser'

const prod = process.env.NODE_ENV === 'production'

export default {
  input: 'src/scripts/index.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'main',
    file: 'dist/scripts/main.bundle.js',
  },
  plugins: [
    prod && terser()
  ],
  watch: {
    clearScreen: false,
  }
}