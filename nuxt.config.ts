import transformerVariantGroup from '@unocss/transformer-variant-group'

let aktualnosciRoutes = await queryContent('/').find()
console.log(aktualnosciRoutes)
console.log("config")
export default defineNuxtConfig({
  // typescript: {
  //   typeCheck: true,
  // },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_APP_BASE_URL || '/'
    }
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content'
  ],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: {
      scale: 3
    }, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    // presets: [],
    transformers: [
      transformerVariantGroup(),
    ],

    theme: {
      colors: {
        'primary': '#114577',
        'secondary': '#2e7eb6',
        'darker': '#040037',
        'accent': '#82c9bb',
      }
    },



    // core options
    shortcuts: [],
    rules: [],
  },
})

