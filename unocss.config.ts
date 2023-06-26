import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'
import { defineConfig, Preset, presetUno, presetAttributify, SourceCodeTransformer } from 'unocss'

const prefix = 'u-'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify({
  classPrefix: prefix
})

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({ prefix }) as Preset<{}>,
    // attributify autocomplete
    presetWeappAttributify() as Preset<{}>
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],
  transformers: [
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    // @ts-ignore
    transformerAttributify(),
    // options 见https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    // @ts-ignore
    transformerClass(),
  ]
})
