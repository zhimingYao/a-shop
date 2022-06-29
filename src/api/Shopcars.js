import request from '@/utils/rquest.js'

export function getshopcar(customer_id){
    return request({
        url:"/shopCar/getShopCar",
        method:'post',
        data:{
            customer_id
        }
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