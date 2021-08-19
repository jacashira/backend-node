const bcrypt = require('bcrypt');

const auth = require('../../../auth');
const TABLE = 'auth';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    async function login(username, password) {
        const data = await store.query(TABLE, { username });
        const equals = await bcrypt.compare(password, data.password);
        if (!equals) {
            throw new Error('information not valid');
        }
        return auth.sign(data);
    }

    // async function login(username, password){
    // const data = await store.query(TABLE, { username: username });
    // bcrypt.compare(password, data.password)
    // .then( soniguales => {
    //     if (soniguales === true) {
    //         // Generar token;
    //         const tok = auth.sign(data);
    //         console.log(tok);
    //         return tok;
    //     } else {
    //         throw new Error('invalid information');
    //     }
    // });
    // }

    async function upsert(data) {
        const authData = {
            id: data.id,
        }

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 5);
        }

        return store.upsert(TABLE, authData);
    }

    return {
        upsert,
        login,
    };
};