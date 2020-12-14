// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
import esbuild from 'rollup-plugin-esbuild' // TypeScript => JavaScript
import vue from 'rollup-plugin-vue' // .vue 文件结尾的 变成 JS
import scss from 'rollup-plugin-scss' // .scss 文件结尾的 变成 JS
import dartSass from 'sass' // 用来支持 rollup-plugin-scss 插件
import { terser } from 'rollup-plugin-terser' // 压缩 JS 代码

export default {
  input: 'src/lib/index.ts',
  output: [
    {
      globals: {
        vue: 'Vue'
      },
      name: 'y-vue3-ui',
      file: 'package/lib/y-vue3-ui.js',
      format: 'umd',
      plugins: [terser()]
    },
    {
      name: 'y-vue3-ui',
      file: 'package/lib/y-vue3-ui.esm.js',
      format: 'es',
      plugins: [terser()]
    }
  ],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015'
    }),
    vue({
      include: /\.vue$/
    })
  ]
}
