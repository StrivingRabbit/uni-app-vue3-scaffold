import path from 'path';
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: path.join(__dirname, "./src/auto-import.d.ts")
    }),
    uni()
  ],
});
