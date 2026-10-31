import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Repo is flrmaee/portfolio -> served at https://flrmaee.github.io/portfolio/
// If you use a custom domain or a repo named flrmaee.github.io, change this to '/'.
export default defineConfig({ plugins: [react()], base: '/portfolio/' });
