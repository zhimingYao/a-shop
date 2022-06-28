// 用来封装网络请求 和 响应拦截 
import axios from "axios";

const serve=axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
    timeout:5000,
})
// 请求拦截器
serve.interceptors.request.use(config=>{
    return config
},(err)=>{
    console.log(err);
})
//响应拦截器
serve.interceptors.response.use(res=>{
    return res
},(err)=>{
    console.log(err);
})
export default serve