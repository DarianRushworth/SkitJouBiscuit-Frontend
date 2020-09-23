const initiallState = {
    details: {},
    status: {
        users: [],
        going: 0,
        interested: 0,
    },
    comments: [],
}

export default function partyReducer(state = initiallState, action){
    switch(action.type){
        case "SET_NEW_STATUS":
            if(action.payload.status === "going"){
            return {
                ...state,
                status: {
                    ...state.status,
                    going: state.status.going + 1,
                    users: [...state.status.users, action.payload]
                }
            }
        } else if(action.payload.status === "interested"){
            return {
                ...state,
                status: {
                    ...state.status,
                    interested: state.status.interested + 1,
                    users: [...state.status.users, action.payload]
                }
            }
        }
        case "SET_NO_STATUS":
            return {
                ...state,
                status: initiallState.status
            }
        case "SET_STATUS":
            const goingArray = action.payload.filter(stat => stat.status === "going")

            const interestedArray = action.payload.filter(stat => stat.status === "interested")
            
            return {
                ...state,
                status: {
                    users: [...action.payload],
                    going: goingArray.length,
                    interested: interestedArray.length,
                }
            }
        case "SET_NEW_COMMENTS":
            return {
                ...state,
                comments: [
                    ...state.comments,
                    ...action.payload
                ]
            }
        case "SET_COMMENTS":
            return {
                ...state,
                comments: [...action.payload],
            }
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