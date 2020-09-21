import axios from "axios"
import { API_URL } from "../../config/constants"
import { AsyncStorage } from "react-native"

function setUser(data){
    
    const storeData = async (value) => {
        try{
            const tokenNeeded = await AsyncStorage.getItem("token")
            if(tokenNeeded !== null){
                await AsyncStorage.removeItem("token")
            }

            await AsyncStorage.setItem("token", value)

        } catch(error){
            console.log(error.message)
        }
    }
    storeData(data.token)
    
    return {
        type: "SET_USER",
        payload: data
    }
}

export function sendUserInfo(info){
    return async(dispatch, getState) => {
        try{
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
        
            dispatch(setUser(registerInfo.data))

        } catch(error){
            console.log(error.message)
        }
    }
}