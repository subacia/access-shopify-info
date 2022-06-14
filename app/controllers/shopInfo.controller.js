const shopInfo = require("../models/shopInfo.model.js");
const shopifyDetails = require("../config/shopify.config.js");
var request = require('request-promise');

exports.create = (req,res) =>{

    getShopData().then((shopInfoResponse) => {

        const shopInfoData = new shopInfo({
            shop_id : shopInfoResponse.shop.id,
            name : shopInfoResponse.shop.name,
            email : shopInfoResponse.shop.email,
            domain : shopInfoResponse.shop.domain,
            province : shopInfoResponse.shop.province,
            country : shopInfoResponse.shop.country,
            address1 : shopInfoResponse.shop.address1, 
            zip : shopInfoResponse.shop.zip, 
            city : shopInfoResponse.shop.city, 
            created_at : new Date()
        });
        
        shopInfo.create(shopInfoData, (err, data) => {
    
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


exports.getStoredShopInfo = (req,res) =>{
    
    shopInfo.get((err, data) => {

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
}

const getShopData = () =>{

    return new Promise((resolve, reject) =>{
        
        let url = shopifyDetails.REQUEST_URL + "shop.json";

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