import React, { useEffect } from "react"
import { View, Image } from "react-native"
import { Tile } from "react-native-elements"
import { useDispatch, useSelector } from "react-redux"

import { partyFetcher } from "../store/parties/actions"
import { selectParties } from "../store/parties/selectors"

import { styles } from "../StyledComponents/homeScreen"

const imageUrl = { uri:"https://i.pinimg.com/originals/d2/02/95/d202954b8c118a92378e3e01dd5562d1.gif"}

export default function HomeScreen(){
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    const custom = styles

    useEffect(() => {
        if(parties.length === 0){
            dispatch(partyFetcher(parties.length))
        }
    }, [dispatch, parties.length])

    return(
        <View
            style={custom.container}>
            <View>
                <Tile
                    imageContainerStyle={custom.tileImage}
                    titleStyle={custom.tileTitle}
                    imageSrc={{ uri: "https://res.cloudinary.com/djzjepmnr/image/upload/v1601115290/bubble-155333_960_720_sx3w3r.png"}}
                    title="Skit Jou Biscuit!"
                    featured
                />
            </View>
            <View>
                <Image
                    source={imageUrl}
                    style={custom.image}
                />
            </View>
        </View>
    )
}