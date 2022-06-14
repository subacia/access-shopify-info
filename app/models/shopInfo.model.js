const sql = require("./db.js");

const shopInfo = function(shopInformation) {
  this.shop_id = shopInformation.shop_id;
  this.name = shopInformation.name;
  this.email = shopInformation.email;
  this.domain = shopInformation.domain;
  this.province = shopInformation.province;
  this.country = shopInformation.country;
  this.address1 = shopInformation.address1; 
  this.zip = shopInformation.zip; 
  this.city = shopInformation.city; 
  this.created_at = new Date();
};

shopInfo.create = (shopInfoData, result) => {

    sql.query("INSERT INTO shopinfo SET ? ", shopInfoData, (err, res) => {
        
        if (err) {
           
            result(err, null);
            return;
        }

        result(null, { insertedId: res.insertId, ...shopInfoData });
    });
};  


shopInfo.get = result => {

    sql.query("SELECT * FROM shopinfo", (err, res) => {
        
        if (err) {
           
            result(err, null);
            return;
        }

        result(null, res);
    });
};  


module.exports = shopInfo;
