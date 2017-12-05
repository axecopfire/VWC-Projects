var fs = require('fs');
var path = require('path');

module.exports = function(dirname, filter, callback) {
    fs.readdir(dirname, function(error, buff) {
        var printList = [];
        if (error) {
            callback({ error: error });
        } else {
            var line = buff.toString().split(",");
            for (var i = 0; i < line.length; i++) {
                var ext = path.extname(line[i]).replace(".", "");
                if (filter === ext) {
                    printList.push(line[i]);
                }
            }
            callback({ success: printList });
        }
    });
}