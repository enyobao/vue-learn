import {
    LOAD_LINK,
    MASK_SHOW
} from "./mutation-types";

export default {
    [LOAD_LINK]( state, changeState ){
        state.loaderLink = changeState;
    },
    [MASK_SHOW]( state, changeState ){
        state.maskShow = changeState;
    }
};