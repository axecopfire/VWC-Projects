var filterDir = require("./filter-dir");
var printlist = filterDir.printlist;

function printNewDir (error, data) {
    if (error) {
        console.error(error)
    } else {
        console.log(printlist);
    }
}



filterDir(process.argv[2], process.argv[3], printNewDir)