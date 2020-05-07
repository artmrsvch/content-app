const fs = require('fs')

module.exports = {
    toHtml: (path, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, err => {
                err ? reject(err) : resolve()
            })
        })
    },
    toJSON: (path, data) => {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, JSON.stringify(data), err => {
                err ? reject(err) : resolve()
            })
        })
    }
}