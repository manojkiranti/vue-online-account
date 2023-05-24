import Repository from "./Repository";

const resource = "pre-account";

export default {
  getPreRequest() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/requisite`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
  
};
