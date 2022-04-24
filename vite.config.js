import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
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
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        /**
         * custom dom id
         * @default: __svg__icons__dom__
         */
        customDomId: '__svg__icons__dom__'
      })
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
          // target: `http://localhost:3000`, // 目标服务器
          target: settings.isUseMock
            ? `http://localhost:3001` // 开发目标服务器
            : `https://test.apilab.cn/v1/60f553d260b22ade4c8e0702/api`, // 线上目标服务器
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
