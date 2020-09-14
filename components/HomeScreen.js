import React, { useEffect, useState } from "react"
import { Text, View, ImageBackground, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { partyFetcher } from "../store/parties/actions"
import { selectParties } from "../store/parties/selectors"

import { styles } from "../StyledComponents/homeScreen"

const imageUrl = { uri:"https://lunosol.com/wp-content/uploads/2019/12/canopy-day-distance.jpg"}

export default function HomeScreen({route, navigation}){
    const [fetched, setFetched] = useState(true)
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    console.log("parties fetched", parties)
    const custom = styles

    useEffect(() => {
        if(fetched === true && parties.length === 0){
            dispatch(partyFetcher())
            setFetched(false)
        } else if(fetched === false && parties.length === 2){
            setFetched(true)
        }
    }, [dispatch, fetched, parties.length])

    return(
        <View
            style={custom.container}>
                <ImageBackground
                    source={imageUrl}
                    style={custom.image}
                >
                    <View style={custom.textContainer}>
                        <Text
                            style={custom.text}>
                            Welcome to your one stop, party tracker and locator!!
                        </Text>
                    </View>
                    <View style={custom.buttonContainer}>
                        <Button 
                            title="Parties"
                            onPress={() => navigation.navigate("Parties", { data: parties })}/>
                        <Button 
                            title="Login"
                            onPress={() => navigation.navigate("Login")}/>
                    </View>
                </ImageBackground>
        </View>
    )
}