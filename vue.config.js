
module.exports ={
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '^/':{
         target:'http://192.168.205.165:3000',
         changeOrigin:true,
         ws:false,
         pathRewrite:{
           '^/':''
         }
      },
    }
  }
}
