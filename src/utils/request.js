import axios from 'axios'


// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 5000 // 请求超时时间
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么 加载中的图片放在这里即可
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// response 拦截器
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log('err' + error) // for debug

    }
)

export default service
