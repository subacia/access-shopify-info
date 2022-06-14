const express = require('express'); 
const router = express.Router();

const getProductData = require("../controllers/getProducts.controller.js");
const getShopInfoData = require("../controllers/getShopInfo.controller.js");
const getProductCountData = require("../controllers/getProductCount.controller.js");
const getAllVariantsData = require("../controllers/getAllVariants.controller.js");
const getProductListingData = require("../controllers/getProductListing.controller.js");
const ShopInfoData = require("../controllers/shopInfo.controller.js");
const productData = require("../controllers/product.controller.js");
const getProductCacheCountData = require("../controllers/getProductCacheCount.controller.js");

router.get('/getproducts' , getProductData.getProducts);
router.get('/getshopinfo' , getShopInfoData.getShopInfo);
router.get('/getproductcount' , getProductCountData.getProductCount);
router.get('/getallvariants' , getAllVariantsData.getAllVariants);
router.get('/productlisting' , getProductListingData.getProductListing);
router.post('/createShopInfo' , ShopInfoData.create);
router.get('/getstoredshopinfo' , ShopInfoData.getStoredShopInfo);
router.get('/savecacheproductcount' , productData.createCount);

router.get('/getproductcachecount' , getProductCacheCountData.getProductCacheCount);

module.exports = router;