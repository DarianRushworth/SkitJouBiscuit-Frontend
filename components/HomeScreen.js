import React from "react"
import { Text, View, ImageBackground, Button } from "react-native"

import { styles } from "../StyledComponents/homeScreen"

const imageUrl = { uri:"https://lunosol.com/wp-content/uploads/2019/12/canopy-day-distance.jpg"}

export default function HomeScreen({navigation}){
    const custom = styles
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
                            onPress={() => navigation.navigate("Parties")}/>
                        <Button 
                            title="Login"
                            onPress={() => navigation.navigate("Login")}/>
                    </View>
                </ImageBackground>
        </View>
    )
}