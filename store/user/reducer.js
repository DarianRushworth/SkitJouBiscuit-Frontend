const initialState = {
    userData: {},
    token: null,
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                userData: {...state.userData, ...action.payload},
                token: `${action.payload.token}`,
            }
    
    default:
    return state
    }
}