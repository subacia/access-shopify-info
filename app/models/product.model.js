const sql = require("./db.js");
// const NodeCache = require("node-cache");
const cache = require("./cache");


// const cache = new NodeCache({ stdTTL: 15 });
const Product = function(productCountInfo) {
    
    this.product_count = productCountInfo.product_count;
    this.created_at =  new Date();
    this.updated_at     = new Date();
    
};

Product.create = (productCountData, result) => {

    sql.query("SELECT product_count FROM productcount", (err, res) => {

        var productCntFromDb = '';
        if(res != ''){
            productCntFromDb = res[0].product_count;
        }
        if(productCntFromDb){

            sql.query("UPDATE productcount SET product_count=?,updated_at=? WHERE id = ?", [productCntFromDb,productCountData.updated_at, 1], (err, res) => {
        
                if (err) {
                   
                    result(err, null);
                    return;
                }

                cache.set("product_cnt_key", productCntFromDb);

                result(null, "Data Updated");
            });

        }else{

            sql.query("INSERT INTO productcount SET ? ", productCountData, (err, res) => {
        
                if (err) {
                   
                    result(err, null);
                    return;
                }
                
            
                cache.set("product_cnt_key", productCountData.product_count);

                result(null, { insertedId: res.insertId, ...productCountData });
            });

        }

    });
};


Product.get =  result => {

    sql.query("SELECT product_count FROM productcount", (err, res) => {
        var productCntFromDb = '';
        if(res != ''){
            productCntFromDb = res[0].product_count;
        }

        result(null, productCntFromDb);
    });
}


module.exports = Product;