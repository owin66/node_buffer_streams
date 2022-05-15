const fs = require('fs')

const readStream = fs.createReadStream('./docs/text.txt')
const writeStream = fs.createWriteStream('./docs/new-text.txt')

/*readStream.on('data', (chunk) => {
    writeStream.write('\n---CHUNK START---\n')
    writeStream.write(chunk)
    writeStream.write('\n---CHUNK END---\n')
})*/
const handleError = () => {
    console.log('Error');
    readStream.destroy();
    writeStream.end('Finished with error...')
}

readStream
    .on('error', handleError)
    .pipe(writeStream)
    .on('error', handleError)
