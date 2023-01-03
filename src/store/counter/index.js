import counterMutations from './mutation';
import counterActions from './actions.js';
import counterGetters from './getters'

 export default {
    namespaced: true,

    state(){
        return{
            counter: 0,
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters
};

