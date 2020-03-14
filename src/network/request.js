import axios from "axios"

export default function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000/api/wh",
    timeout: 5000
  })

  // 拦截器
  instance.interceptors.request.use(config => {
    //请求前处理配置信息
    return config
  }, err => console.log(err))

  instance.interceptors.response.use(res => {
    //处理响应回来的数据
    return res.data
  }, err => console.log(err))

  return instance(config)
}