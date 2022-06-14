const Product = require("../models/product.model.js");
const shopifyDetails = require("../config/shopify.config.js");
var request = require('request-promise');

exports.createCount = (req,res) =>{

    getProductCount().then((productCountResponse) => {

        const productCountData = new Product({
            product_count : productCountResponse.count
        });

        Product.create(productCountData, (err, data) => {

            if (err){
                res.status(500).json({
                    error : err
                });
            }else{
                res.status(200).json({
                    data : data
                });
            }
        });

    }).catch((error) => {
        res.status(500).json({
            error : error
        });
    });
}

const getProductCount = () =>{

    return new Promise((resolve, reject) =>{
        
        let url = shopifyDetails.REQUEST_URL + "products/count.json";

        let options = {
            method: 'GET',
            uri: url,
            json: true,
            headers: {
                'X-Shopify-Access-Token': shopifyDetails.SHOPIFY_ACCESS_TOKEN,
                'content-type': 'application/json'
            }
        };

        request(options)
        .then(function (response) {

            resolve(response)
        })
        .catch(function (err) {
            
            reject(err)
        });
    }).catch((error) =>{
        throw new Error(error);
    });
}