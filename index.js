var express = require('express');
var app = express();
var http = require('http').Server(app)
var fs = require('fs')
var port = process.env.PORT || 3000;
const path = require('path');
app.use(express.static(path.resolve('./public')));
counter = 0;


// app.get('/', (req,res) =>{
//     res.render('index.pug');
// })



app.all('/Province/:name', function(req, res){
    counter ++;
    var filename = req.params.name + ".json";
    fs.readFile('./provinces/' + filename, function(err, data){
        if(err) throw err;
        var provinceData = JSON.parse(data);
        res.render('index.pug', {provinceData:provinceData})
        console.log(provinceData);
    })

    fs.writeFile('new_File.txt', "Server Request: "+counter, (err)=>{
        if (err) throw err;
      console.log('File is created successfully.');
    })
})







http.listen(port, function () {
	console.log('listening on port 3000');
});