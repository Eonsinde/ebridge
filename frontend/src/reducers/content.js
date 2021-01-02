import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, GET_CATEGORIES } from '../actions/types';


let initialState = {
    products: [],
    categories: [],
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case GET_CATEGORIES:
            return {
                ...state, 
                categories: action.payload
            }
        default:
            return state;
    }
}