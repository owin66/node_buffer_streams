const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')

readStream.on('data', (chunk) => {
    writeStream.write('\n---CHUNK START---\n')
    writeStream.write(chunk)
    writeStream.write('\n---CHUNK END---\n')
})
/*
readStream.pipe(writeStream)*/
