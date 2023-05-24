import Repository from './Repository';

const resource = 'admin';

export default {
    adminUserLists(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/users`, { params })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  provPrerequest(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/get-prerequest-prov-list`,payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  getProvList(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/user/prov-list`,payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
};
