const bookshelf = require('../server/bookshelf');

const FriendsClip = bookshelf.model('FriendsClip', {
    tableName: "friendsclips"
})

module.exports = FriendsClip;