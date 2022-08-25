import axios from "axios";

const service = axios.create({
    baseURL: "https://www.fastmock.site/mock/bf1fcb3c2e2945669c2c8d0ecb8009b8/api",
    timeout:3000,
    headers:{
        "Content-type" : "application/json;charset=utf-8"
    }
})

service.interceptors.request.use((config) => {
    config.headers = config.headers || {} //这啥意思
    if (localStorage.getItem("token")){
        config.headers.token = localStorage.getItem("token")|| ""
    }
    return config
})
service.interceptors.response.use((res) => {
    const code:number = res.data.code
    if (code !== 200){
        return Promise.reject(res.data)
    }
    return res.data
},error => {
    console.log(error)
})

export default service































