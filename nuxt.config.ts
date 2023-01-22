import transformerVariantGroup from '@unocss/transformer-variant-group'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // typescript: {
  //   typeCheck: true,
  // },
  // appDir: './',
  // buildDir: './',
  // rootDir: '.',
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
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
