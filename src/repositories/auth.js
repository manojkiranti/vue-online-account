import axios from 'axios'
let baseEndpoint = process.env.VUE_APP_BASE_URL_DEV;
// if (process.env.NODE_ENV === 'development') {
//     baseEndpoint = process.env.VUE_APP_BASE_URL_DEV
// } else {
//     baseEndpoint = '/api'
// }
// baseEndpoint = "http://10.11.154.6/api/"
const resource = '';

export default {
  login(payload) {      
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}auth/login`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  changePassword(payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}${resource}change_password`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      axios.post(`${resource}/logout`, {})
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  }
};
