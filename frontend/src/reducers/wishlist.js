import { GET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/types';


const initialState = {
    wishlist: []
};

export default function(state=initialState, action){
    switch (action.type){
        case GET_WISHLIST:
        case ADD_TO_WISHLIST:
        case REMOVE_FROM_WISHLIST:
            return { 
                ...state,
                wishlist: action.payload
            };
        default:
            return state;
    }
}