const initailState = {
    parties: [],
}

export default function partiesReducer(state = initailState, action){
    switch(action.type){
        case "PARTY_SETTER":
            return {
                ...state,
                parties: [
                    ...state.parties, ...action.payload
                ]
            }
        
        default:
        return state
    }
}