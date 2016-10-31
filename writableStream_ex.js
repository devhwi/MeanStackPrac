var fs = require('fs');
var readStream = fs.createReadStream('writeFile.txt');
var writeStream = fs.createWriteStream('bar.txt');

readStream.pipe(writeStream);