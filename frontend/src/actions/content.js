import axios from "axios"
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, GET_CATEGORIES } from './types';
import { returnErrors } from './error';


export const getProducts = () => dispatch => {
    axios.get('/api/products')
        .then(res => dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const getCategories = () => dispatch => {
    axios.get('/api/category')
        .then(res => dispatch({
            type: GET_CATEGORIES,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status))
        });
}