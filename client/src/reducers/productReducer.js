
import * as actions from '../constants/actions';
const initialState = {
    products: [],
    type: '',
    status: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FIND_PRODUCTBYCATEGORY:
            return { products: [...state.products, ...action.products], type: action.type, status: action.status }
        default:
            return state;
    }
}

export default productReducer;