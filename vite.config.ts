import { defineConfig, loadEnv } from 'vite'
import { overrideVaadinConfig } from './vite.generated';

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  }
})

export default overrideVaadinConfig(defineConfig);
