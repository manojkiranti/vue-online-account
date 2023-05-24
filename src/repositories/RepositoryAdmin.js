import axios from 'axios'
import router from '../router'
// import Toasted from 'vue-toasted'
// Vue.use(Toasted);

let baseEndpoint = process.env.VUE_APP_BASE_URL_DEV;
// if (process.env.NODE_ENV === 'development') {
//     baseEndpoint = process.env.VUE_APP_BASE_URL_DEV
// } else {
//     baseEndpoint = '/api'
// }
// baseEndpoint = "http://10.11.154.6/api/"
const { getToken } = require('../lib/storage');

const instance = axios.create({
    baseURL: baseEndpoint,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer ${getToken()}`,
    },
    timeout: 50000 // request timeout
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getToken()}`
    return config
})

// response interceptor
instance.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      const res = response

      // if the custom code is not 20000, it is judged as an error.
     
      return res
    },
    error => {
      console.log('err' + error) // for debug
    //   console.log('err code ' + error.response.status) // for debug

      if (error.response.status == '403' || error.response.status == '401') {
        // Vue.toasted.show('Please Login Again', {
        //     type:'error'
        // })
        alert('Token Expired, Please login again');
        router.push('/login')
      }
      return Promise.reject(error)
    }
  )

export default instance
