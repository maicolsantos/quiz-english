import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom', // Define o ambiente como jsdom para testes de componentes React
    setupFiles: 'tests/setup.ts', // Arquivo de setup para configurar o ambiente de testes
    globals: true, // Habilita a API global para testes (ex.: expect)
  },
})
