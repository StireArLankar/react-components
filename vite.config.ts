import { resolve } from 'path'

import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), svgr(), react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
})
