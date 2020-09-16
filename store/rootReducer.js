import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

import partiesReducer from "./parties/reducer"
import partyReducer from "./party/reducer"

const configureReducer = combineReducers({
    Events: partiesReducer,
    Info: partyReducer,
})

const rootReducer = createStore(configureReducer, composeWithDevTools(
    applyMiddleware(thunk)
))

export default rootReducer