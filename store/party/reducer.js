const initiallState = {
    details: {},
    comments: [],
}

export default function partyReducer(state = initiallState, action){
    switch(action.type){
        case "SET_DETAILS":
            return {
                ...state,
                details: {
                    ...action.payload
                }
            }

            default:
                return state
    }
}