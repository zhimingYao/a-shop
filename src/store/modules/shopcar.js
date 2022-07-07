const getsearshopcarlist=()=>{
    return{
        shopcarlist:[]
    }
}
const state=getsearshopcarlist()

console.log(state)

const mutations={
    SET_SHOPcar:(state,shopcarlist)=>{
        state.shopcarlist=shopcarlist
    }
}

const actions={
    shopcarlist({commit},shopcarlist){
        commit('SET_SHOPcar',shopcarlist)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions,
}