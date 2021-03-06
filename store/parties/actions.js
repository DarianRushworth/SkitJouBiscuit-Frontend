import axios from "axios"
import { API_URL } from "../../config/constants"

function partySetter(data){
    return {
        type: "PARTY_SETTER",
        payload: data,
    }
}

export function partyFetcher(data){
    return async(dispatch, getState) => {
        try{
            
            const partiesData = await axios.get(`${API_URL}/parties/list?offset=${data}&limit=5`)
            
            dispatch(partySetter(partiesData.data.parties))

        } catch(error){
            console.log(error.message)
        }
    }
}