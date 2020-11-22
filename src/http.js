import axios from 'axios'

const http = axios.create({
    baseURL:'http://127.0.0.1:5000/',
    timeout:1000,
    headers:{'x-Custom-Header':'foobar'}
})
http.interceptors.request.use(function (config){
    //看下本地是否有token
    let token =localStorage.getItem('token')
    if (token){
    //如果有，追加到认证当中
        config.headers.common['Autorization'] = 'Bearer '+localStorage.getItem('token')
    }
    return config;
},function (error){
    return Promise.reject(error)
});
export default http