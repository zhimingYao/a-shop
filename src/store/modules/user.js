import {setToken,getToken} from '@/utils/localstlroage.js'
import {getlogin} from '@/api/login.js'

/* const getDefaultState=()=>{
    return{
        token:getToken(),
        username:'',
        total:''
    }
}
const state=getDefaultState() */

const state={
    token:'',
    username:''
}
const mutations={
    SET_TOKEN:(state,token)=>{
        state.token=token
    },
    SET_USERNAME:(state,username)=>{
        state.username=username
    },
   
}

const actions={
    login({commit},userinfo){
        return new Promise((resolve,reject)=>{
        getlogin(userinfo).then(response=>{
            const data=response
            console.log(data.data.token)
            commit('SET_TOKEN',data.data.token) 
           /*  commit('SET_TOKEN',data.data.data.userInfo)  */
           console.log(data.data.userInfo)
            setToken('token',data.data.token)
            resolve()
        })
        })
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions,
}
