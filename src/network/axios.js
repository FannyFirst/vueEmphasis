import Vue from "vue"
import axios from "axios"

Vue.prototype.axios = axios

axios.defaults.timeout = 5000

const baseURL = "http://httpbin.org"

const instance = axios.create({
  baseURL
})
instance.interceptors.request.use(config =>{
  //do check
  console.log(config);
  return config
})
instance.interceptors.response.use(result=>{
  //do check
  return result.data
},error => {
  //throw error
  console.log(error);
  return Promise.reject(error)
})

export default instance