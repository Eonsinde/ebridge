import { GET_WISHLIST, ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from './types';
import axios from 'axios';
import { returnErrors } from './error';


export const getWishList = () => dispatch => {
    axios.get('/api/wishlist')
        .then(res => dispatch({ type: GET_WISHLIST, payload: res.data }))
        .catch(err => returnErrors(err.response.data, err.response.status));
}

export const addToWishList = (data) => dispatch => {
    axios.post(`/api/wishlist`, data)
        .then(res => dispatch({ type: ADD_TO_WISHLIST, payload: res.data }))
        .catch(err => returnErrors(err.response.data, err.response.status));
}

export const removeFromWishList = (productID) => dispatch => {
    axios.delete(`/api/wishlist?product_id=${productID}`)
        .then(res => dispatch({ type: REMOVE_FROM_WISHLIST, payload: res.data }))
        .catch(err => returnErrors(err.response.data, err.response.status));
}