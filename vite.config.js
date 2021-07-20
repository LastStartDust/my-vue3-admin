import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import { svgBuilder } from './src/plugins/svg-builder'
import { viteMockServe } from 'vite-plugin-mock'
import settings from './src/settings'

// https://vitejs.dev/config/
export default ({ command }) => {
  // command命令: 有serve和build两个值，分别对应开发和打包构建
  // console.log('command', command);
  const isBuild = command === 'build'
  return defineConfig({
    plugins: [
      vue(),
      viteMockServe({
        mockPath: 'mock/api',
        // close support .ts file
        supportTs: false,
        // default
        // 是否启用本地mock
        localEnabled: settings.isUseMock,
        // 生产环境是否启用mock
        prodEnabled: settings.isUseMock,
        injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `
      }),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`
            }
          }
        ]
      }),
      svgBuilder('./src/icons/svg/')
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      proxy: {
        // 匹配 / 的转发请求到 http://127.0.0.1:8888/
        '/dev-api': {
          target: `http://localhost:3000`, // 目标服务器
          changeOrigin: true,
          ws: true,
          // 路径重写,去掉了 '/'
          rewrite: (path) => path.replace(new RegExp(`^/dev-api`), '')
        }
      }
    },
    build: {
      sourcemap: !isBuild
    }
  })
}
