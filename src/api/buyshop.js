import request from '@/utils/request.js'

/* 获取地址 */
export function getaddress(customer_id) {
    return request({
        url: '/user/getAddress',
        method: 'post',
        data: {
            customer_id
        }
    })
}
/* 修改收获地址 */
export function getupdateAddress(data) {
    return request({
        url: '/user/updateAddress',
        method: 'post',
        data: {
            ...data
        }
    })
}
/* 获取默认地址 */
export function getDefaultAddress(customer_id) {
    return request({
        url: '/user/getDefaultAddress',
        method: 'post',
        data: {
            customer_id
        }
    })
}
/* 删除地址 */
export function deleteAddress(id) {
    return request({
        url: '/user/deleteAddress',
        method: 'post',
        data: {
            id
        }
    })
}

/* 设置默认收获地址 */
export function defaultAddress(data) {
    return request({
        url: '/user/defaultAddress',
        method: 'post',
        data: {
            ...data
        }
    })
}
/* 提交订单 */
export function payOrder(data) {
    return request({
      url: '/order/payOrder',
      method: 'post',
      data: {
        ...data,
      },
    })
  }
  