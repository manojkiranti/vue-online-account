import Repository from "./RepositoryAdmin";

const resource = "admin";

export default {
  getNewRequest(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/online-account/new`,{params})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getPreRequest() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/online-account/account/pre-requisite`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getAccountDetail(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/online-account/account/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  updateAccount(id, payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/online-account/account-update/${id}`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  handleAccount(id, payload) {
    return new Promise((resolve, reject) => {
      Repository.put(`${resource}/online-account/account-handle/${id}`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },

}