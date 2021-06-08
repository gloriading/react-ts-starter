import path from 'path';
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/app/components'),
    },
  },
  plugins: [reactRefresh()],
  build: {
    outDir: 'build'
  }
});