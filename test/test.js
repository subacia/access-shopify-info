let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

var _ = require('lodash');


//test to check sucessfully fetch product listing
var testCase = require("./testCase.js")
describe('/get getProductListing' , () =>{
	var output = testCase.output
	var message = testCase.message
	var input = testCase.input

	it(message , (done) =>{
		chai.request(server)
			.get("/productlisting?limit=" + input.limit + "&page_info=" + input.page_info + "&rel=" + input.rel )
			.end((err, res) => {

				var flag1 = (_.isEqual(res.body.productListing.shop_info.name , output.productListing.shop_info.name))
                var flag2 = (_.isEqual(res.body.productListing.shop_info.domain , output.productListing.shop_info.domain))

				var flag = flag1 && flag2
				res.should.have.status(200);
                flag.should.equal(true);
                done();
			})
	}).timeout(10000000);
})