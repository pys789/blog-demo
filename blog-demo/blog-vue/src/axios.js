import axios from 'axios'
import element from 'element-ui'
import store from './store'
import router from './router'

axios.defaults.baseURL = "http://localhost:8081"

axios.interceptors.request.use(config => {
    console.log("前置拦截")
    // 可以统一设置请求头
    return config
})

axios.interceptors.response.use(response => {
        // 正常返回结果
        let res = response.data;
        console.log('后置拦截')
        if (res.code === 200) {
            return response
        } else {
            element.Message({
                message: res.msg,
                type: 'error',
                duration: 2 * 1000
            })
            // 直接拒绝往下执行
            return Promise.reject(res.msg)
        }
    },
    error => {
        // 后端抛出异常
        console.log('err' + error)// for debug
        if (error.response.data) {
            error.message = error.response.data.msg
        }
        // 根据请求状态觉得是否登录或者提示其他,shiro 抛出的未授权异常
        if (error.response.status === 401) {
            store.commit('REMOVE_INFO');
            router.push({
                path: '/login'
            });
            error.message = '请重新登录';
        }
        if (error.response.status === 403) {
            error.message = '权限不足，无法访问';
        }
        element.Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)

    })






