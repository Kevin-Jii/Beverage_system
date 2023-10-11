import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: false,
      fs: {
        strict: true,
      },
      host: true,
      port:9102,
      proxy: {
        '/resource': {
          target: 'http://localhost:8105',//代理的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/resource/, '')//这里的/需要转义
        }
      }
    },
    plugins: [
    ],
  },
  baseConfig
);
