//Require expressJS Framework
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
// Incluede Route Fıles
const hotelRoutes = require('./src/Routes/HotelRoutes');


//Express Framework
const app = express();
var path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended : true }));

// Start Listening Port 
port = "8092";
var server = app.listen(port, function () {
    console.log('Server is Running ...' );
    console.log(process.env.API_KEY);
});

app.use(bodyParser.urlencoded({extended :false}));

app.use('/',hotelRoutes );

// catch the Broken links 
app.use(function(req,res){
    res.status(404).send({url:req.originalUrl + 'not found'})
});