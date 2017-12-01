import { LOAD_LINK } from "./mutation-types";

export default {
    [LOAD_LINK]( state, changeState ){
        state.loaderLink = changeState;
    }
};