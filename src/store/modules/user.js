import {setToken,getToken} from '@/utils/localstlroage.js'
import {getlogin} from '@/api/login.js'

const getDefaultState=()=>{
    return{
        token:getToken(),
        username:''
    }
}
const state=getDefaultState()

const mutations={
    SET_TOKEN:(state,token)=>{
        state.token=token
    },
    SET_USERNAME:(state,username)=>{
        state.username=username
    }
}

const actions={
    login({commit},userinfo){
        return new Promise((resolve,reject)=>{
        getlogin(userinfo).then(response=>{
            const data=response
            console.log(data)
            commit('SET_TOKEN',data.data.data.token)
            commit('SET_TOKEN',data.data.data.userInfo)
            setToken('token',data.data.data.token)
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
