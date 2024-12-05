import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import { defineConfig } from 'vite'; // Импортируйте defineConfig для поддержки типов

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    VitePluginSvgSpritemap('source/img/sprite/*.svg', {
      styles: false,
      injectSVGOnDev: true,
    }),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false,
                },
                removeViewBox: false,
                cleanupIds: false,
              },
            },
          },
          'removeDimensions',
        ],
      },
      png: {
        quality: 80,
        palette: true
      },
      jpeg: {
        quality: 80,
        progressive: true
      },
      jpg: {
        quality: 80,
        progressive: true
      },
      cache: true,
      cacheLocation: './.cache',
    }),
  ],
  css: {
    devSourcemap: true
  },
  publicDir: 'public',
  root: './source',
  build: {
    rollupOptions: {
      input: {
        main: './source/index.html',
        page1: './source/price-01-radial.html',
        page2: './source/price-02-universal.html',
        page3: './source/price-03-tube.html',
        page4: './source/price-04-plug-stem.html',
        page5: './source/price-05-power-valkaseal.html',
        page6: './source/price-06-chemistry.html',
        page7: './source/price-07-instruments.html',
        page8: './source/price-08-vsealkit-quickplug.html',
        page9: './source/others-01-xtraseal.html',
        page10: './source/others-02-snapin.html',
        page11: './source/others-03-paste.html',
        page12: './source/gruz-01.html',
        page13: './source/gruz-02.html',
      },
    },
    outDir: '../dist',
  },
  base: './',
  server: {
    port: 3000,
  }
});

//import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
//import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
// import { ViteMinifyPlugin } from 'vite-plugin-minify';

//** @type {import('vite').UserConfig} */
/*export default {
  plugins: [
    VitePluginSvgSpritemap('source/img/sprite/*.svg', {
      styles: false,
      injectSVGOnDev: true,
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false,
                },
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                cleanupIds: false,
              },
            },
          },
          'removeDimensions',
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true
      },
      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: './.cache',
    }),
  ],
  css: {
    devSourcemap: true
  },
  publicDir: 'public',
  root: './source',
  build: {
    outDir: '../dist',
  },
  base: './',
  server: {
    port: 3000,
  }
};*/
