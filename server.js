const express = require("express");
const routes = require("./app/routes/routes.js")
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);


var port = process.env.PORT || 3000;

server = app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});


module.exports = server