require("./filter-dir")(process.argv[2], process.argv[3], function(response) {
    if (response.error) {
        console.error(response.error);
    } else {
        console.log(response.success);
    }
});