const fs = require('fs');
const path = require('path');

function readFile(filePath) {
    const data = fs.readFileSync(path.join('./', filePath));  // the files are in a buffer
    return data.toString();  // we convert to string so we can read
}

module.exports = {
    readFile
};