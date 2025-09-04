import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// заменяй "project-showcase" на название репозитория
export default defineConfig({
  plugins: [react()],
  base: '/project-showcase/',
})