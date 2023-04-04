import { presetAnu, presetIconExtraProperties } from 'anu-vue'
import { presetThemeDefault } from '@anu-vue/preset-theme-default'
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
} from 'unocss'
import { transformerVariantGroup } from 'unocss'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 3,
            // extraProperties: presetIconExtraProperties,
        }),
        presetAttributify(),
        // anu-vue preset
        presetAnu(),

        // default theme preset
        presetThemeDefault(),
    ],
    transformers: [
        transformerVariantGroup(),
    ],
    include: [/.*\/anu-vue\.js(.*)?$/, './**/*.vue', './**/*.md'],
    theme: {
        colors: {
            'primary': '#124559',
            'secondary': '#98D9C2',
            'claret': '#89043D',
            'dark': '#01161E',
            'accent': '#82c9bb',
            'light': '#FAFAFF'
        }
    },
})