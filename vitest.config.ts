import path from 'node:path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: [
      {
        find: /@mini-vue\/([\w-]*)/,
        replacement: `${path.resolve(__dirname, 'packages')}/$1/src`,
      },
    ],
  },
})
