import request from '@/utils/rquest';

// 购物车商品
export function getShopCarList(customer_id) {
  return request({
    url: '/shopCar/getShopCar',
    method: 'post',
    data: {
      customer_id
    }
  });
}
