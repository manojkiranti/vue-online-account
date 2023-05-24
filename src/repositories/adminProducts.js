import Repository from "./RepositoryAdmin";

const resource = "admin";

export default {
    getProductCategory(params) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/product-category/all`, { params })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
   
    createProductCategoryData(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/product-category`, payload)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    updateProductCategory(id, payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/product-category/${id}`, payload)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    deleteProductCategory(id) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/product-category/delete/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    getProducts(params) {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/products`, { params })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    createProduct(payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/products`, payload)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    updateProduct(id, payload) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/products/${id}`, payload)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },
    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/product/delete/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error.response);
                });
        });
    },

}