import React from "react"
import { View, Image } from "react-native"

import { styles } from "../StyledComponents/signup"
import { Form } from "../helpers/Form"

const image = { uri: "https://booksparks.com/wp-content/uploads/2018/04/dance-party-dancing-GIF-downsized.gif" }

export default function SignUpScreen(){
    const custom = styles
    return (
        <View 
            styles={custom.container}>
            <Image
                source={image}
                style={custom.image}
            />
                <View>
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
        </View>
    )
}