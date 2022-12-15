import presetWeapp from 'unocss-preset-weapp'
import { defineConfig } from 'unocss'
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    // todo: ts error
    presetWeapp() as any
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      center: 'flex justify-center items-center',
      btn: 'w-100%  text-28 b-rd-4 h-70 flex items-center justify-center',
      'btn-sm': 'btn text-24 b-rd-4 h-50',
      'bg-primary': 'bg-blue-700',
      'btn-primary': 'bg-blue-700 text-white',
      'btn-primary-2': 'bg-blue-1 text-grey',
      'color-primary': 'color-blue-700'
    }
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify() as any,

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass() as any
  ]
})
