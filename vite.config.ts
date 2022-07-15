import { defineConfig } from 'vite';
import { VitePWA, ManifestOptions } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

let manifest: Partial<ManifestOptions> = {
  name: '计算器',
  description: 'A simple demo.',
  background_color: '#F1FAFA',
  theme_color: '#00B271',
};

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      includeAssets: ['favicon.ico'],
      manifest: manifest,
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /(.*?)\.(js|css|ts)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'js-css-cache',
            },
          },
          {
            urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
            },
          },
        ],
      },
    }),
  ],
});
