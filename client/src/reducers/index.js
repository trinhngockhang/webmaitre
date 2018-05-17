import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    homeReducer,
    categoryReducer,
    productReducer
})

export default rootReducer;