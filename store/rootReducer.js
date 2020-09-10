import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

// const configureReducer = combineReducers({

// })

const rootReducer = createStore( composeWithDevTools(
    applyMiddleware(thunk)
))

export default rootReducer