import request from '@/utils/rquest.js'

/* 购物车列表 */
export function getShopCar(data){
    return request({
        url:'/shopcar/getShopCar',
        method:'post',
        data,
    })
}
