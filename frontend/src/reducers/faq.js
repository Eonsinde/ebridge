import { GET_FAQS } from '../actions/types';


let initialState = {
    faqs: []
}


export default function(state=initialState, action){
    switch(action.type){
        case GET_FAQS:
            return {
                ...state,
                faqs: action.payload
            }
        default:
            return state;
    }
}