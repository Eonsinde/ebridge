import {GET_ERRORS} from '../actions/types';

let initialState = {
    title: '',  // use the error title to handle how the alert components works
    msg: '',
    status: null
};


export default function(state=initialState, action){
    switch(action.type){
        case GET_ERRORS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}