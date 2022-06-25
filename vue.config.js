const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '^/':{
         target:'http://192.168.205.195:3000',
         changeOrigin:true,
         ws:false,
         pathRewrite:{
           '^/':''
         }
      }
    }
  }
})
