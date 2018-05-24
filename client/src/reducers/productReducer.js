
import * as actions from '../constants/actions';
const initialState = {
    products: [],
    product: {},
    type: '',
    status: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FIND_PRODUCTBYCATEGORY:
            return { ...state, products: [...state.products, ...action.products], type: action.type, status: action.status }
 
        case actions.FIND_PRODUCT_DETAIL_BY_ID:
            return { ...state, product: action.product, type: action.type, status: action.status }

        default:
            return state;
    }
}

export default productReducer;