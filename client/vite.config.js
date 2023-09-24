import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {},
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      // Use the environment variable in your rollup options
      input: {
        main: import.meta.env.API,
      },
    },
  }
})
