import Repository from "./Repository";

const resource = "admin";

export default {
  getLearningTypes() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/learning-types`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deleteLearningType(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/learning-types-delete/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  createLearningTypeStore(payload) {
    return new Promise((resolve, reject) => {
        Repository.post(`${resource}/learning-types`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  updateLearningType(id, payload) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/learning-types-update/${id}`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getLearningList(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/learnings`, {params})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deleteLearningList(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/learnings-delete/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  updateLearningList(id,payload) {
    return new Promise((resolve, reject) => {
      Repository.patch(`${resource}/learnings/${id}`,payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  getLearningDetails(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/learning-details/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deleteLearningCourse(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/learning-course-delete/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  createLearningCourseStore(payload) {
    return new Promise((resolve, reject) => {
        Repository.post(`${resource}/learning-course`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  updateLearningCourseStore(id, payload) {
    return new Promise((resolve, reject) => {
        Repository.patch(`${resource}/learning-course-update/${id}`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  getLearningCourseDetails(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/learning-course-details/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  deleteCourseChapter(id) {
    return new Promise((resolve, reject) => {
      Repository.delete(`${resource}/learning-course-chapter-delete/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  createLearningCourseChapter(payload) {
    return new Promise((resolve, reject) => {
        Repository.post(`${resource}/learning-course-chapter`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  updateLearningCourseChapter(id,payload) {
    return new Promise((resolve, reject) => {
        Repository.patch(`${resource}/learning-course-chapter-update/${id}`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  getLearningCourseChapterDetail(id) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/learning-course-chapter-details/${id}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  
  createLearningStore(payload) {
    return new Promise((resolve, reject) => {
        Repository.post(`${resource}/learnings`, payload)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  
  getChapterParent(chapterId) {
    return new Promise((resolve, reject) => {
        Repository.get(`${resource}/learning-course-chapter-parents/${chapterId}`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
  },
  
};
