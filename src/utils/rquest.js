// 用来封装网络请求 和 响应拦截 
import axios from "axios";
import Vue from "vue";
import { Loading } from 'element-ui';

let load
const serve=axios.create({
    baseURL:process.env.VUE_APP_BASE_URL,
    timeout:5000,
})
// 请求拦截器
serve.interceptors.request.use(config=>{
    load = Loading.service({
        lock: true,
        text: '',
        spinner: '',
        background: 'rgba(0,0,0,0.7)'
    })
    return config
})
//响应拦截器
serve.interceptors.response.use(res=>{
    setTimeout(() => {
      load.close();  4
      
    }, 1000);
    
    return res.data
})
export default serve