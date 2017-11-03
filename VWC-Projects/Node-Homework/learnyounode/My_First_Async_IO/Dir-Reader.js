var fs = require('fs');

function finishedReading(error, buff) {
    if (error) {
        return console.error(error)
    } else {
        var line = buff.toString().split('\n');
        console.log(line.length - 1);
    }
}

fs.readFile(process.argv[2], finishedReading);
