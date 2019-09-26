var express = require('express');
var app = express();
var http = require('http').Server(app)
var fs = require('fs')
var port = process.env.PORT || 3000;
const path = require('path');
// var ratenow = require('./rateprovince')
var requests = require('./modules/fsreadfile')
var jsoncondtion =require('./modules/conditionjson')



app.use(function(req, res, next){
    console.log(req.originalUrl);
    requests(req.originalUrl);
    next();
})

app.use(express.static(path.resolve('./public')));

app.use(express.static(path.resolve('./public/scripts')));

app.all('/Province/:name', function(req, res){
    
    var filename = req.params.name + ".json";
    fs.readFile('./provinces/' + filename, function(err, data){
        if(err) throw err;
        var provinceData = JSON.parse(data);
        res.render('index.pug', {provinceData:provinceData})
        console.log(provinceData);
    })
})


app.get('/rate', function(req, res) {
  var rate = req.query.rate;
  var province = (req.query.province.toLowerCase())+".json";
  var data = JSON.parse(jsoncondtion.read_JSON(province));
  var average = Number(data.rating) + Number(rate)
  data.rating = average;
  data.rating = Number(data.rating / 2).toFixed(2)
  jsoncondtion.update_JSON(province, data)
  res.end("" + data.rating)
})






http.listen(port, function () {
	console.log('listening on port 3000');
});