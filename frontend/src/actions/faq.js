import { GET_FAQS } from '../actions/types';
import axios from 'axios';



export const getFaqs = () => dispatch => {
    axios.get('/api/faqs')
        .then(res => dispatch({
            GET_FAQS,
            payload: res.data
        }))
}