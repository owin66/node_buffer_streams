const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')


readStream.pipe(writeStream)