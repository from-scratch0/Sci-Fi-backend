import axios from 'axios';

const baseURL = "http://127.0.0.1:7003";
const config = {
    baseURL,
    timeout: 8000,
    withCredential: true // 跨域请求时携带cookie
}

export function get(url) {
    return axios({
        ...config,
        method: 'get',
        url
    }).then(res => res.data); // res = {headers, data, config}
}
export function post(url, data) {
    return axios({
        ...config,
        method: 'post',
        data,
        url
    }).then(res => res.data); 
}
export function put(url, data) {
    return axios({
        ...config,
        method: 'put',
        data,
        url
    }).then(res => res.data); 
}
export function del(url, data) {
    return axios({
        ...config,
        method: 'del',
        data,
        url
    }).then(res => res.data); 
}


