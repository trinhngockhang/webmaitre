import * as actions from '../constants/actions';;

const initialState = {
    category: null,
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.FIND_USER_BY_USER_NAME_HAS_ERR:
            return { ...state, category: action.category }
        case actions.FIND_USER_BY_USER_NAME_SUCCESS:
            return { ...state, category: action.category }
        default:
            return state;
    }
}

export default homeReducer;