import axios from "axios"
import { API_URL } from "../../config/constants"
import AsyncStorage from "@react-native-community/async-storage"

function setUser(data){
    return {
        type: "SET_USER",
        payload: data
    }
}

export function sendUserInfo(info){
    return async(dispatch, getState) => {
        try{
            console.log(info)
            const registerInfo = info.fullName
                                ? await axios.post(`${API_URL}/signup`,{
                                    fullName: info.fullName,
                                    favoriteArtist: info.favoriteArtist,
                                    email: info.email,
                                    password: info.password,
                                    isEventOwner: JSON.stringify(info.isEventOwner) === "false" ?"true" :"false",
                                })
                                : await axios.post(`${API_URL}/login`,{
                                    email: info.email,
                                    password: info.password,
                                })
                                
            const tokenNeeded = await AsyncStorage.getItem("token")
            
            if(tokenNeeded !== null && tokenNeeded === registerInfo.data.token){
                dispatch(setUser(registerInfo.data))
            } else if(tokenNeeded !== null && tokenNeeded !== registerInfo.data.token){
                const deleteToken = await AsyncStorage.clear()
                if(deleteToken === null){
                    const addToken = await AsyncStorage.setItem("token", registerInfo.data.token)
                    dispatch(setUser(registerInfo.data))
                }
            } else if(tokenNeeded === null){
                const addToken = await AsyncStorage.setItem("token", registerInfo.data.token)
                dispatch(setUser(registerInfo.data))
            }

        } catch(error){
            console.log(error.message)
        }
    }
}