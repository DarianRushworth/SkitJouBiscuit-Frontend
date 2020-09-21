import axios from "axios"
import { API_URL } from "../../config/constants"
import { AsyncStorage } from "react-native"

function setDetails(data){
    return {
        type: "SET_DETAILS",
        payload: data
    }
}

export function commentFetcher(id){
    return async(dispatch, getState) => {
        try{
            const commentsLength = getState().Info.comments.length
            const token = await AsyncStorage.getItem("token")
            const comments = await axios.get(`${API_URL}/parties/${id}/comments?offset=${commentsLength}&limit=5`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("comments found", comments)

        } catch(error){
            console.log(error.message)
        }
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