var fs = require('fs');
module.exports = function (url) {
    fs.appendFile('requests.txt',url + ',', function () {
        fs.readFile('requests.txt', (err, data)=>{
            var urls = data.toString().split(',');
            fs.writeFile('new_File.txt',urls.length, function (err, data) {
                if (err) throw err;
                console.log('File is created successfully.');
            })
        })
    })


 


    // fs.readFile('new_File.txt', function (err, data) {
    //     var counter = data * 1;
    //     counter = counter + 1;
    //     console.log(data, counter);
        


    // });


}