const fs = require('fs');

const readStream = fs.createReadStream('./readme4.txt')
const writeStream = fs.createWriteStream('./writeme3.txt')

// readStream을 writeStream으로 보내주는것.
readStream.pipe(writeStream);