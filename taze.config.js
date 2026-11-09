import { defineConfig } from 'taze';

export default defineConfig({
  maturityPeriod: 1,
  packageMode: {
    eslint: 'minor',
  },
  recursive: true,
  write: true,
});
