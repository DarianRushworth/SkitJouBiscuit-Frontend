import React from "react"
import { View, Image, ScrollView } from "react-native"
import { useSelector } from "react-redux"

import { selectToken } from "../store/user/selectors"
import { contentValidator, lengthValidator } from "../helpers/Validations"
import { styles } from "../StyledComponents/signup"
import { Form } from "../helpers/Form"

const image = { uri: "https://booksparks.com/wp-content/uploads/2018/04/dance-party-dancing-GIF-downsized.gif" }

export default function SignUpScreen({ navigation }){
    const token = useSelector(selectToken)

    if(token !== null){
        navigation.navigate("Home")
      }

    const custom = styles

    return (
        <ScrollView 
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
                                validators: [contentValidator],
                            },
                            favoriteArtist: {
                                label: "Favorite Artist",
                            },
                            email: {
                                label: "Email",
                                validators: [contentValidator],
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
                                validators: [lengthValidator],
                                inputProps: {
                                    secureTextEntry: true,
                                }
                            }
                        }} />
                </View>
        </ScrollView>
    )
}