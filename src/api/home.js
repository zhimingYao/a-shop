import reqest from '../utils/request'

export function getShopList(parent_name){
    // 返回值 是promise实例
    return reqest({
        url:'/type/getproduct',
        method:'post',
        data:{
            parent_name,
        }
    })
}