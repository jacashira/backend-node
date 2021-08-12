const store = require('../../../store/dummy');

const table = 'user';


module.exports= function(injectedStore) {

    let store = injectedStore;
    if (!store ) {
        store = require('../../../store/dummy');
    }

    async function list(){
        return store.list(table);
    };

    async function get(id){
        console.log(table,id);
        return store.get(table,id);
    };

    return {
        list,
        get,
    };
};
