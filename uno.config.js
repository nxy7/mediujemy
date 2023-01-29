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
            'primary': '#114577',
            'secondary': '#2e7eb6',
            'darker': '#040037',
            'accent': '#82c9bb',
        }
    },
})