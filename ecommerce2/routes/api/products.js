const express = require("express");
const router = express.Router();
const productsService = require('../../services/products');

const productService = new productsService();

router.get("/", async function(req, res, next){
    const {tags} = req.query;

    console.log('req', req);
    try {
        const producs = await productService.getProducts({tags});
        res.status(200).json({
            data: producs,
            message : 'producs listed'
        });
    } catch (error) {
        next(error);
    }
    
});

router.get("/:productId", async function(req, res, next){
    const {productId} = req.params;
    console.log('req', req.params, req.body);
    try {
        const producs = await productService.getProduct({productId});
        res.status(200).json({
            data: producs,
            message : 'producs retrieved'
        });
    } catch (error) {
        next(error)
    }
    
});

router.post("/", function(req, res, next){
    const {body : product} = req;
    console.log('req', req);
    try {
        const createProducs = productService.getProduct({product});

        res.status(201).json({
            data: createProducs,
            message : 'producs listed'
        });
    } catch (error) {
        next(error)
    }
    
});

router.put("/:productId", function(req, resq, next){

    const {productId} = req.params;
    const {body : product} = req;
    console.log('req', req.params, req.body);
    try {
        
        const updateProduct = productService.getProduct({productId, product});
        res.status(200).json({
            data: updateProduct,
            message : 'producs listed'
        });
    } catch (error) {
        next(error);
    }
    
});

router.delete("/:productId", function(req, res, next){
    const {productId} = req.params;
    console.log('req', req.params, req.body);
    try {
        const deleteProducs = productService.getProduct({productId});
        res.status(200).json({
            data: deleteProducs,
            message : 'producs delete'
        });
    } catch (error) {
        next(error);
    }
    
});

module.exports = router;