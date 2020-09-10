import React from "react"
import { View, ImageBackground } from "react-native"

import { styles } from "../StyledComponents/loginScreen"
import { Form } from "../helpers/Form"

const image = { uri: "https://www.psybient.org/love/wp-content/uploads/Boom-2018.jpg" }

export default function SignUpScreen(){
    const custom = styles
    return (
        <View 
            styles={custom.container}>
            <ImageBackground
                source={image}
                style={custom.image}
                >
                <View style={{
                    height: 1,
                }}>
                    <Form 
                        fields={{
                            fullName: {
                                label: "Full-Name",
                            },
                            favoriteArtist: {
                                label: "Favorite Artist",
                            },
                            email: {
                                label: "Email",
                                inputProps: {
                                    keyboardType: "email-address",
                                },
                            },
                            isEventOwner: {
                                label: "Event Owner",
                                inputProps: {
                                    checkbox: true,
                                },
                            },
                            password: {
                                label: "Password",
                                inputProps: {
                                    secureTextEntry: true,
                                }
                            }
                        }} />
                </View>
            </ImageBackground>
        </View>
    )
}