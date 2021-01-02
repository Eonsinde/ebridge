import { combineReducers } from 'redux';
import auth from './auth';
import error from './error';
import message from './message';
import content from './content';
import faq from './faq';
import wishlist from './wishlist';



let rootReducer = combineReducers({
    content,
    faq,
    auth,
    error,
    message,
    wishlist
});

export default rootReducer;
