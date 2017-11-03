var fs = require('fs');
var path = require('path');

function finishedReading(error, buff) {
    if (error) {
        return console.error(error);
    } else {
        var line = buff.toString().split(",");
        for (var i = 0; i < line.length; i++){
            var ext = path.extname(line[i]).replace(".", "");            
            if (process.argv[3] === ext){
                console.log(line[i]);
            }
        }
    }
}

fs.readdir(process.argv[2], finishedReading);