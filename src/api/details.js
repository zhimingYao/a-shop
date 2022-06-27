import request from '@/utils/rquest.js'
/* 获取商品详情 */
export function getdetailspu(spu_id){
    return request({
        url:'/store/getSku',
        method:'post',
        data:{
            spu_id
        }
    })
}
