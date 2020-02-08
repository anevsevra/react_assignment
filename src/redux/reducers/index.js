import { combineReducers } from 'redux';
import cart from './cartReducer';
import request from './requestReducer';

const rootReducer = combineReducers({ cart, request });

export default rootReducer;
