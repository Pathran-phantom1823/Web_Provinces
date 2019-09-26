var express = require('express');
var app = express();
var http = require('http').Server(app)
var fs = require('fs')
var port = process.env.PORT || 3000;
const path = require('path');
var ratenow = require('./rateprovince')
var requests = require('./modules/fsreadfile')



app.use(function(req, res, next){
    console.log(req.originalUrl);
    requests(req.originalUrl);
    next();
})

app.use(express.static(path.resolve('./public')));

app.all('/Province/:name', function(req, res){
    
    var filename = req.params.name + ".json";
    fs.readFile('./provinces/' + filename, function(err, data){
        if(err) throw err;
        var provinceData = JSON.parse(data);
        res.render('index.pug', {provinceData:provinceData})
        console.log(provinceData);
    })
})


app.post('/rate', function(req, res) {
    req.on('data', function(data){
      var datum = JSON.parse(data)
      fs.readFile(datum.prov, function(err, dats) {
        console.log(JSON.parse(dats))
      })      
    })
})






http.listen(port, function () {
	console.log('listening on port 3000');
});