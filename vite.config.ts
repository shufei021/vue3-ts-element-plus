import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx  from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //别名配置
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [
    vue(), // 配置vite在运行的时候自动检测eslint规范
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
 
  css:{
    //预处理器配置项
    preprocessorOptions:{
      less:{
        //支持直接使用表达式 width: 100px - 20px;得到值为width:80px;
        math: "always",
        javascriptEnabled: true,
      }
    }
  }
})
