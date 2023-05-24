import Repository from "./Repository";

const resource = "online-account";

export default {
  getPreRequest(params, step) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/${step}`, {params})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getPreRequestSteps(id, step) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/${step}/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  stepOnePost(data, param) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/first-step/${param}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });

      
    });
  },
  stepOneUpdate(data, guid) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/first-step-update/${guid}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  otpPreRequest(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/otp-pre-requisite/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  verifyOtp(id, otpCode) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/otp-verification/${id}`, otpCode)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  resendOtp(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/otp-verification/resend/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  stepTwoPost(data, param) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/second-step/${param}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  stepTwoUpdate(data, guid) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/second-step-update/${guid}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  stepThreePost(data, param) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/third-step/${param}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  stepThreeUpdate(data, guid) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/third-step-update/${guid}`, data)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  finalRequest(param) {
    return new Promise((resolve, reject) => {
      Repository.get(`account/step-final-pre-requisite/${param}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
};
