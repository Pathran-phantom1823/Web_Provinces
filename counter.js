var express = require('express');
var app = express();
var fs = require('fs')

exports.append = function(res){
    fs.appendFile('requests.txt', pingCount, (err)=>{
        if(err) throw err;
        console.log(save);
})
}