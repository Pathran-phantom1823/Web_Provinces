var fs = require('fs');
exports.read_JSON = function (province) {
    var content = fs.readFileSync('./provinces/' + province, 'utf8');
    return content;
}

exports.update_JSON = function (province, data) {
    fs.writeFile(('./provinces/' + province).toLowerCase(), JSON.stringify(data), function (err) {
    });
}