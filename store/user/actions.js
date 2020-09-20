import axios from "axios"
import { API_URL } from "../../config/constants"
import { AsyncStorage } from "react-native"

function setUser(data){
    
    const storeData = async (value) => {
        try{
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

export function sendUserInfo(data){
    return async(dispatch, getState) => {
        try{
            const registerInfo = data.fullName
                                ? await axios.post(`${API_URL}/signup`,{
                                    fullName: data.fullName,
                                    favoriteArtist: data.favoriteArtist,
                                    email: data.email,
                                    password: data.password,
                                    isEventOwner: JSON.stringify(data.isEventOwner) === "false" ?"true" :"false",
                                })
                                : await axios.post(`${API_URL}/login`,{
                                    email: data.email,
                                    password: data.password,
                                })
            
            dispatch(setUser(registerInfo.data))

        } catch(error){
            console.log(error.message)
        }
    }
}