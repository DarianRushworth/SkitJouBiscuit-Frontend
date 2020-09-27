const initialState = {
    userData: {},
    token: null,
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "REMOVE_USER":
            return {
                ...state,
                userData: initialState.userData,
                token : initialState.token
            }
        case "SET_USER":
            return {
                ...state,
                userData: {...action.payload},
                token: action.payload.token,
            }
    
    default:
    return state
    }
}