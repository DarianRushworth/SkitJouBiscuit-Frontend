import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import partiesReducer from "./parties/reducer"

const configureReducer = combineReducers({
    Events: partiesReducer,
})

const rootReducer = createStore(configureReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default rootReducer