const cache = require("../models/cache");
const Product = require("../models/product.model.js");

exports.getProductCacheCount = (req,res) =>{

    if(cache.has('product_cnt_key')){

        let cacheData  = cache.get("product_cnt_key");

        res.status(200).json({
            productCount : cacheData
        });

    }else{

        Product.get( (err, data) => {

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

}