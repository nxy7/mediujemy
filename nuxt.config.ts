import UnoCSS from 'unocss/vite'

export default defineNuxtConfig({
  // typescript: {
  //   typeCheck: true,
  // },
  vite: {
    plugins: [
      UnoCSS(),
    ]
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_APP_BASE_URL || '/'
    }
  },

  modules: ['@anu-vue/nuxt', // '@unocss/nuxt',
  '@nuxt/content', "@nuxt/image"],

  // build: {
  //   transpile: ['vuetify'],
  // },
  // unocss: {
  //   autoImport: true,
  //   uno: true,
  //   attributify: true,
  //   wind: true,
  //   icons: {
  //     scale: 3
  //   },
  //   transformers: [
  //     transformerVariantGroup(),
  //   ],
  //   theme: {
  //     colors: {
  //       'primary': '#114577',
  //       'secondary': '#2e7eb6',
  //       'darker': '#040037',
  //       'accent': '#82c9bb',
  //     }
  //   },
  //   // core options
  //   shortcuts: [],
  //   rules: [],
  // },
  css: ['@anu-vue/preset-theme-default/dist/style.css',
    // 'vuetify/lib/styles/main.sass'
  ],

  compatibilityDate: '2024-08-03',
})