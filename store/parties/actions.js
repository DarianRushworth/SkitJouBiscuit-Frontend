import axios from "axios"
import { API_URL } from "../../config/constants"

function partySetter(data){
    return {
        type: "PARTY_SETTER",
        payload: data,
    }
}

export function partyFetcher(){
    return async(dispatch, getState) => {
        try{
            
            const partiesData = await axios.get(`${API_URL}/parties/list?offset=0&limit=2`)
            
            dispatch(partySetter(partiesData.data.parties))

        } catch(error){
            console.log(error.message)
        }
    }
}