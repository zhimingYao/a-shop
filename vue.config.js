const path = require('path')
const selfResolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/': {
        target: 'http://192.168.205.195:3000',
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
    config.resolve.alias
    .set('comps', selfResolve('src/components')) // 配置别名)
    .set('@', selfResolve('src'))
    // npm i svg-sprite-loader -D 将import进来的图标打包到库里 将来直接引用图标的id
    // vue inspect 帮助快速审查webpack配置
    // vue inspect --rules 查看规则
    // vue inspect --rule svg 查看svg配置
    // 1. 阻止svg规则加载icons/svg中的图标
    config.module.rule('svg')
      .exclude.add(selfResolve('src/icons'))
    
    // 2. 配置svg-sprite-loader仅加载icons/svg中的图标
    config.module.rule('icons') // 规则存在就查询，不存在就创建
      .test(/\.svg$/) // 仿照vue inspect --rule svg 审查语法来写 所有以svg结尾的import使用这个规则
      .include.add(selfResolve('src/icons'))
      .end() // 找回this上下文 -- 当前的icons规则
      .use('svg-sprite-loader') // 先use再loader
        .loader('svg-sprite-loader')
          .options({symbolId: 'icon-[name]'}) // 使用图标的方式 icon-文件名
  }


}


