import React from "react"
import { Text, View, ImageBackground } from "react-native"

import { styles } from "../StyledComponents/loginScreen"
import { Form } from "../helpers/Form"

const image = { uri: "https://www.psybient.org/love/wp-content/uploads/Boom-2018.jpg" }

export default function LoginScreen(){
    const custom = styles
    return (
        <View
            style={custom.container}>
            <ImageBackground
                source={image}
                style={custom.image}
                >
                <View style={custom.textContainer}>
                <Form
                    fields={{
                        email: {
                          label: 'Email',
                          inputProps: {
                            keyboardType: 'email-address',
                          },
                        },
                        password: {
                          label: 'Password',
                          inputProps: {
                            secureTextEntry: true,
                          },
                        },
                      }}/>
                </View>
            </ImageBackground>
        </View>
    )
}