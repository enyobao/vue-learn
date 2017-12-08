import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

Vue.use(Vuex);

let state = {
    //header标题
    "loaderLink" : "",
    //是否显示遮罩
    "maskShow" : false
};

export default new Vuex.Store({
    state,
    mutations
});