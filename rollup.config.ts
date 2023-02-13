import { defineConfig } from 'rollup'
import tsPlugin from '@rollup/plugin-typescript'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'esm',
        file: 'lib/index.js',
      },
      {
        format: 'iife',
        file: 'lib/index.iife.js',
        name: 'M34BV',
      },
    ],
    plugins: [
      tsPlugin({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
])
