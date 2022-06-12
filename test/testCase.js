module.exports = {
	message : "testCase : it should fetch product info successfully ",

	input : {
        "page_info" : "eyJsYXN0X2lkIjo2OTg5NTE3NjUyMTc0LCJsYXN0X3ZhbHVlIjoiQWJpZ2FpbCBLYW5DYW4gSmVhbnMiLCJkaXJlY3Rpb24iOiJuZXh0In0",
        "limit" : 1,
        "rel" : "next"
    },

	output : 
	{
        "productListing": {
            "shop_info": {
                "name": "vajro-interview",
                "domain": "vajro-interview.myshopify.com"
            },
            "product_count": 50,
            "products": [
                {
                    "id": 6989517095118,
                    "title": "All About the Neutrals Color Block Sweater",
                    "created_at": "2022-04-12T13:09:25+05:30",
                    "status": "active",
                    "variants": [
                        {
                            "id": 41111999447246,
                            "title": "S",
                            "price": "19.99",
                            "compare_at_price": "49.95",
                            "inventory_item_id": 43204326129870,
                            "inventory_quantity": 1,
                            "requires_shipping": true
                        },
                        {
                            "id": 41111999480014,
                            "title": "M",
                            "price": "19.99",
                            "compare_at_price": "49.95",
                            "inventory_item_id": 43204326162638,
                            "inventory_quantity": 0,
                            "requires_shipping": true
                        },
                        {
                            "id": 41111999512782,
                            "title": "L",
                            "price": "19.99",
                            "compare_at_price": "49.95",
                            "inventory_item_id": 43204326195406,
                            "inventory_quantity": 0,
                            "requires_shipping": true
                        }
                    ],
                    "images": [
                        {
                            "src": "https://cdn.shopify.com/s/files/1/0615/8447/4318/products/image_62c46498-e70e-46c3-89c6-10001f120730.jpg?v=1649749165"
                        },
                        {
                            "src": "https://cdn.shopify.com/s/files/1/0615/8447/4318/products/image_12b5a15c-0f43-4e68-a731-e8eabbdaadca.jpg?v=1649749165"
                        },
                        {
                            "src": "https://cdn.shopify.com/s/files/1/0615/8447/4318/products/image_01822b09-ce1c-43e4-9fdf-ac55ce39f1ee.jpg?v=1649749165"
                        }
                    ]
                }
            ]
        }
    }
}
