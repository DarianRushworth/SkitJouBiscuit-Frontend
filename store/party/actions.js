import axios from "axios"
import { API_URL } from "../../config/constants"

function setDetails(data){
    return {
        type: "SET_DETAILS",
        payload: data
    }
}

export function detailFetcher(id){
    return async(dispatch, getState) => {
        try{
            const partyData = await axios.get(`${API_URL}/parties/list/${id}`)
            
            dispatch(setDetails(partyData.data))

        } catch(error){
            console.log(error.message)
        }
    }
}