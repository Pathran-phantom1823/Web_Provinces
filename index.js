var express = require('express');
var app = express();
var http = require('http').Server(app)
var path = require('path');
var port = process.env.PORT || 3000;


app.get('/', (req,res) =>{
    res.render('index.pug');
})

http.listen(port, function () {
	console.log('listening on port 3000');
});