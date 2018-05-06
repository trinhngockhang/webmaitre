import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import withRedux from "next-redux-wrapper"

import rootReducer from "./src/reducers"

const initStore = (initState = {}) => createStore(
    rootReducer,
    initState,
    compose(
        applyMiddleware(thunkMiddleware),
    )
)

export default (mapStateToProps, actions) => {
    return (component) => withRedux(initStore, mapStateToProps, actions)(component)
}