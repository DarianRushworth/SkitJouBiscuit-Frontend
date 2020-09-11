import React, { useEffect } from "react"
import { Text, View, ImageBackground } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { styles } from "../StyledComponents/partiesScreen"
import { partyFetcher } from "../store/parties/actions"
import { selectParties } from "../store/parties/selectors"

const imageUrl = { uri: "https://s3.amazonaws.com/media.citizine.tv/uploads/2016/01/12/origin-1.jpg"}

export default function PartiesScreen(){
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    console.log("party time", parties)
    const custom = styles

    useEffect(() => {
        if(parties.length === 0){
        dispatch(partyFetcher())
        }
    }, [dispatch, parties.length])

    // const displayParties = parties.length >= 2
    //                     ? 
    
    return (
        <View
            style={custom.container}>
            <ImageBackground
                source={imageUrl}
                style={custom.image}>
                <View
                    style={custom.textContainer}>
                    <Text
                        style={custom.text}>
                        Fetched Parties here!
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}