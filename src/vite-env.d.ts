// declare module '*.vue' {
//     // 从 "vue" 中导入 DefineComponent 类型
//     import { DefineComponent } from 'vue'

//     // 定义一个类型为 DefineComponent 的变量 component
//     // 它具有三个泛型参数，分别表示组件的 props、组件的 data 和其他的类型。
//     // 在这里，我们使用空对象（{}）表示没有 props，使用空对象（{}）表示没有 data，使用 any 表示其他类型可以是任意值。
//     const component: DefineComponent<object, object, any>

//     // 导出 component 变量，这样其他地方在导入 ".vue" 文件时，TypeScript 编译器会将它识别为一个 Vue 组件
//     export default component
// }

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  /**
   *
   * 由于 vite-plugin-eslint 库有点落后，导致 vite 高版本不能正确的识别 cjs 模块
   * 所以这里手动定义
   *
   * 已经向该库提交了相关的 PR，等待作者合并
   * @see https://github.com/gxmari007/vite-plugin-eslint/pull/87
   *
   * 并且该问题也在其他用户中出现
   * @see https://github.com/gxmari007/vite-plugin-eslint/issues/86
   */
  declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite'
    import { ESLint } from 'eslint'
  
    /** Plugin options, extending from ESlint options */
    interface Options extends ESLint.Options {
      /** Path to ESLint instance that will be used for linting */
      eslintPath?: string
      /** Check all matching files on project startup */
      lintOnStart?: boolean
      /** A single file, or array of files, to include when linting */
      include?: string | string[]
      /** A single file, or array of files, to exclude when linting */
      exclude?: string | string[]
      /** Custom error formatter or the name of a built-in formatter */
      formatter?: string | ESLint.Formatter['format']
      /** The waring found will be printed */
      emitWarning?: boolean
      /** The errors found will be printed */
      emitError?: boolean
      /** Will cause the module build to fail if there are any warnings, based on emitWarning */
      failOnWarning?: boolean
      /** Will cause the module build to fail if there are any errors, based on emitError */
      failOnError?: boolean
    }
  
    const content: (rawOptions?: Options) => Plugin
    export default content
  }