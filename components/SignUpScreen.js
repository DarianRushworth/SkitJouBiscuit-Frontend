import React from "react"
import { Text, View, ImageBackground } from "react-native"

import { styles } from "../StyledComponents/loginScreen"

const image = { uri: "https://www.psybient.org/love/wp-content/uploads/Boom-2018.jpg" }

export default function LoginScreen(){
    const custom = styles
    return (
        <View 
            styles={custom.container}>
            <ImageBackground
                source={image}
                style={custom.image}
                >
                <View style={custom.textContainer}>
                <Text
                    style={custom.text}>
                    Sign-up Form here!
                </Text>
                </View>
            </ImageBackground>
        </View>
    )
}