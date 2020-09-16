import React, { useEffect, useState } from "react"
import { Text, View, Image } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { partyFetcher } from "../store/parties/actions"
import { selectParties } from "../store/parties/selectors"

import { styles } from "../StyledComponents/homeScreen"

const imageUrl = { uri:"https://media.tenor.com/images/f41cc28da57fb5335a54f3954c42e3e1/tenor.gif"}

export default function HomeScreen({route, navigation}){
    const [fetched, setFetched] = useState(true)
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    const custom = styles

    useEffect(() => {
        if(fetched === true && parties.length === 0){
            dispatch(partyFetcher(parties.length))
            setFetched(false)
        } else if(fetched === false && parties.length === 2){
            setFetched(true)
        }
    }, [dispatch, fetched, parties.length])

    return(
        <View
            style={custom.container}>
            <View style={custom.textContainer}>
                <Text
                    style={custom.text}>
                    Skit Jou Biscuit
                </Text>
            </View>
            <Image
                source={imageUrl}
                style={custom.image}
                />
        </View>
    )
}