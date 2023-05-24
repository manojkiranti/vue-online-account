import Repository from "./Repository";

const resource = "online-account";

export default {
  postDate(data, param) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/first-step/${param}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
  
};
