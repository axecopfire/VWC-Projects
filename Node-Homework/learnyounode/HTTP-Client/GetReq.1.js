var http = require("http");

http.get(process.argv[2], (res) => {
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' + `Expected application/json but received ${contentType}`);
    } else if (!/^application\/json/.test(contentType)) {
        error = newError('Invalid content-type.\n' + `Expected application/json but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        //consume response
        res.resume();
        return;
    }

    res.setEncoding('utf8')
})