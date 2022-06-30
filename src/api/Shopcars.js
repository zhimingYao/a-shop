import request from '@/utils/rquest.js'

export function getshopcar(data){
    return request({
        url:"/shopcar/getShopCar",
        method:'post',
        data,
    })
}
export function detshopcar(customer_id){
    return request({
        url:'/shopCar/deleteShopCar',
        method:'post',
        data:{
            customer_id            
        }
    })
}