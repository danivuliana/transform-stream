const fs = require('fs');
const { Transform } = require('stream');

const reverseWords = new Transform({
  transform(chunk, encoding, callback) {
    const input = chunk.toString();
    const reversed = input
      .split(/\s+/)
      .map(word => word.split('').reverse().join(''))
      .join(' ');
    callback(null, reversed + ' ');
  }
});

const inputStream = fs.createReadStream('input.txt');
const outputStream = fs.createWriteStream('output.txt');

inputStream.pipe(reverseWords).pipe(outputStream);
