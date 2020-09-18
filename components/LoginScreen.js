import React from "react"
import { View, Image } from "react-native"

import { styles } from "../StyledComponents/loginScreen"
import { Form } from "../helpers/Form"

const image = { uri: "https://thumbs.gfycat.com/HealthyOrderlyHuman-max-1mb.gif" }

export default function LoginScreen(){
    const custom = styles
    return (
        <View
            style={custom.container}>
            <Image
              source={image}
              style={custom.image}
            />
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
        </View>
    )
}