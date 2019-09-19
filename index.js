var express = require('express');
var app = express();
var http = require('http').Server(app)
var fs = require('fs')
var port = process.env.PORT || 3000;
const path = require('path');
app.use(express.static(path.resolve('./public')));
var request = require('./counter');


// app.get('/', (req,res) =>{
//     res.render('index.pug');
// })



app.all('/Province/:name', function(req, res){
    var filename = req.params.name + ".json";
    fs.readFile('./provinces/' + filename, function(err, data){
        if(err) throw err;
        var provinceData = JSON.parse(data);
        res.render('index.pug', {provinceData:provinceData})
        console.log(provinceData);

    })
})


var pingCount = 0;
app.get('/',(req, res) => {
  pingCount++;
  res.send(`ping world for ${pingCount} times`);
  request.append(res)
});



http.listen(port, function () {
	console.log('listening on port 3000');
});