const fs = require('fs');

fs.readFile('./readFile.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
})