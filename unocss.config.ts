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
      btn: 'w-100% text-28 b-rd-4 h-70 flex items-center justify-center',
      'btn-sm': 'btn text-24 b-rd-4 h-50',
      'bg-primary': 'bg-blue-700',
      'btn-primary': 'bg-blue-700 text-white',
      'btn-primary-2': 'bg-blue-1 text-gray-5',
      'btn-plain': 'bg-transparent text-blue-7 b',
      'color-primary': 'color-blue-700',
      'bd-gray': 'b b-gray-3',
      circle: 'b-rd-50%',
      card: 'bg-white b b-gray-2 p-2  b-rd-2'
    }
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify() as any,

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass() as any
  ]
})
