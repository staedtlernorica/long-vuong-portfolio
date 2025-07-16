import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    base: '/long-vuong-portfolio/', // ← update this to your repo name!
});
