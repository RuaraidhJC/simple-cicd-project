const fs = require('fs');

const readSecret = (filePath) => {
    try {
        return fs.readFileSync(filePath, 'utf8')
    } catch (err) { return "" }
}

module.exports = readSecret
