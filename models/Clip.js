const bookshelf = require('../bookshelf');

const Clip = bookshelf.model('Clip', {
    tableName: "clips"
})

module.exports = Clip;