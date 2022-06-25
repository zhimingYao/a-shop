import request from "@/utils/request.js";

export function getParentName() {
    return request({
        url:"/type/getParentName",
        method:"post",
    })
}

export function getShopList(data){
    return request({
        url:"/type/getproduct",
        method:"post",
        data,
    })
}