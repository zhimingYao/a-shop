import request from '@/utils/rquest.js'
/* 根据一级分类获取商品成功 */

export function getproduct(parent_name){
    return request({
        url:'/type/getproduct',
        method:'post',
        data:{
            parent_name
        }
    })
}
/* 根据二级分类获取商品成功 */
export function getSearch(name){
    return request({
        url:'/wares/getSpu',
        method:'post',
        data:{
            name
        }
    })
}