import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@contexts', replacement: path.resolve(__dirname, './src/contexts') },
      { find: '@interfaces', replacement: path.resolve(__dirname, './src/interfaces') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@services', replacement: path.resolve(__dirname, './src/services') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
    ]
  }
})
