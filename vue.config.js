const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/': {
        target: 'http://192.168.205.165:3000',
        //  target:'http://192.168.205.197:3000',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/': ''
        }
      }
    }
  },
  //
  chainWebpack(config) {
    config.module
        .rule('svg')
        .exclude.add(resolve('src/icons/index.js'))
        .end()
    config.module
        .rule('icons')
        .test(/\.svg$/)
        .include.add(resolve('src/icons/index.js'))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
            symbolId: 'icon-[name]'
        })
        .end()
}
}


