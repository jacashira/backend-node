const {nanoid} = require('nanoid');
const TABLE = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/mysql');
    }

    function list() {
        return store.list(TABLE);
    }

    function get(id) {
        return store.get(TABLE, id);
    }

    async function upsert(body) {
        const post = {
            title: body.title,
            content: body.content,
            userId: body.userId,
        }

        if ( body.id ) {
            post.id = body.id;
        } else {
            post.id = nanoid();
        }

        return store.upsert(TABLE, post);
    }

    return {
        list,
        get,
        upsert,
    };
}