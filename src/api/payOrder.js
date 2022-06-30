import request from '@/utils/rquest.js'

/**
 * @param {string} data
 * outTradeNo
 * totalAmount
 * subject
 * body
 */
export function payOrder(data) {
  return request({
    url: '/order/payOrder',
    method: 'post',
    data: {
      ...data,
    },
  })
}
