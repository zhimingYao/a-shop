import axios from "axios";
export const addAddress = (options) => axios.post('/user/addAddress',options)
