import * as actions from '../constants/actions';

const initialState = {
    categorys: [],
    status: '',
    type: '',
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CATEGORY:
            return { type: action.type, status: action.status, categorys: action.categorys }

        default:
            return state;
    }
}

export default categoryReducer;