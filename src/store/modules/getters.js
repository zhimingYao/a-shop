const getters={
    token:state=>state.user.token,
    username:state=>state.user.username,
    password:state=>state.user.password,
    total:state=>state.search.total,
    id:state=>state.user.id,
    shopcarlist:state=>state.shopcar.shopcarlist
}
export default getters
