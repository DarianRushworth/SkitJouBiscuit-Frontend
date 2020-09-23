import axios from "axios"
import { API_URL } from "../../config/constants"
import AsyncStorage from "@react-native-community/async-storage"

function setDetails(data){
    return {
        type: "SET_DETAILS",
        payload: data
    }
}

function setComments(data){
    return {
        type: "SET_COMMENTS",
        payload: data,
    }
}

function setNewComment(data){
    return {
        type: "SET_NEW_COMMENTS",
        payload: data,
    }
}

function setStatus(data){
    console.log("data test", data)
    return {
        type: "SET_STATUS",
        payload: data,
    }
}

function setNoStatus(){
    return {
        type: "SET_NO_STATUS",
    }
}

export function statusFetcher(id){
    return async(dispatch, getState) => {
        try{
            const token = await AsyncStorage.getItem("token")
            const status = await axios.get(`${API_URL}/parties/${id}/favored`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            if(status.data.length >= 1){
                dispatch(setStatus(status.data))
            } else {
                dispatch(setNoStatus())
            }

        } catch(error){
            console.log(error.message)
        }
    }
}

export function sendNewComment(id, Info){
    return async(dispatch, getState) => {
        try{
            const token = await AsyncStorage.getItem("token")
            const comment = await axios.post(`${API_URL}/parties/${id}/newComment`, {
                input: Info,
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            dispatch(setNewComment(comment.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function commentFetcher(id){
    return async(dispatch, getState) => {
        try{
            const commentsLength = getState().Info.comments.length
            
            const token = getState().User.token
            
            const comments = await axios.get(`${API_URL}/parties/${id}/comments?offset=${commentsLength}&limit=5`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            
            dispatch(setComments(comments.data.comments))

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