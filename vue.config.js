
module.exports ={
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      '^/':{
         target:'http://192.168.205.165:3000',
        //  target:'http://192.168.205.197:3000',
        //  target:'http://192.168.205.195:3000',
         changeOrigin:true,
         ws:false,
         pathRewrite:{
           '^/':''
         }
      }
    }
  }
}
