const bookshelf = require('../server/bookshelf');

const Clip = bookshelf.model('Clip', {
    tableName: "clips"
})

module.exports = Clip;