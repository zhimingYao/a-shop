import request from '@/utils/rquest.js'

/* 主页轮播图 */
export function getSwiper(){
    return request({
        url:'/type/getSwiper',
        method:'post',
      
    })
}
// 主页Basketball shoes商品渲染
export function getSpu(name){
    return request({
        url:'/wares/getSpu',
        method:'post',
        data:{name}
    })
}