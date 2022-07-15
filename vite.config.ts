import { defineConfig } from 'vite';
import { VitePWA, ManifestOptions } from 'vite-plugin-pwa';
import vue from '@vitejs/plugin-vue';

let icons: Record<string, any>[] = [
  {
    src: '/public/icon.png',
    size: '192x192',
    type: 'image/png',
  },
];

let manifest: Partial<ManifestOptions> = {
  name: '计算器',
  short_name: '计算器',
  start_url: '/',
  description: 'A simple demo.',
  // background_color: '#F1FAFA',
  // theme_color: '#00B271',
  display: 'standalone',
  icons: icons,
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
