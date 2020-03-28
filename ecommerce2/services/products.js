const producsMocks = require('../utils/mocks/products');

class ProductsService{
    constructor(){

    }

    getProducts({ tags }){
        return Promise.resolve(producsMocks);
    }

    getProduct({productId}){
        return Promise.resolve(producsMocks[0])
    }

    createProduct({productId}){
        return Promise.resolve(producsMocks[0])
    }

    updateProduct({productId, product}){
        return Promise.resolve(producsMocks[0])
    }

    deleteProduct({productId}){
        return Promise.resolve(producsMocks[0])
    }
}

module.exports = ProductsService;