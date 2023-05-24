import Repository from "./Repository";

const resource = "auth";

export default {
  getEmployeeList() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/all-employees`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
}