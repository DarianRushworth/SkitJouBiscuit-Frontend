import React from "react"
import { Text, View, ImageBackground } from "react-native"

import { styles } from "../StyledComponents/partiesScreen"

const imageUrl = { uri: "https://s3.amazonaws.com/media.citizine.tv/uploads/2016/01/12/origin-1.jpg"}

export default function PartiesScreen(){
    const custom = styles
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