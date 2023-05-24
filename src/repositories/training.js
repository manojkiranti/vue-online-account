import Repository from './Repository';

const resource = 'admin';

export default {
    adminTrainingList(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/trainings`, {params})
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  getTrainerList() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/getuserlist`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  getTrainingTypes() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/training-types`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  createTraining(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/training-store`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  updateTraining(id,payload) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/training-update/${id}`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  deleteTraining(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/training-delete/${id}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  addTrainingUser(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/training/store-users`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  getAdminTrainingsDetails(trainingId) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/training-details/${trainingId}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  getProvUsersList(provId) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/user/list/get-prov/${provId}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  }
};
