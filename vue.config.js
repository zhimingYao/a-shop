
module.exports ={
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    // proxy 配置代理服务器
    // 1：页面请求 npm run serve 服务 
    // 2: npm run serve 请求 target
    // 3：target响应后 npm run serve 服务 在响应给页面
    // ------->npm run serve 代理服务器
    proxy: {
      '/': {
        target: 'http://192.168.205.165:3000/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
}

