import request from "@/utils/request.js";

export function getUserOrder(data) {
    return request({
        url: "/order/getUserOrder",
        method: "post",
        data,
    })
}

export function getOrderDetail(data) {
    return request({
        url:"/order/getOrderDetail",
        method:"post",
        data,
    })
}