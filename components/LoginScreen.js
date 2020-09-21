import React from "react"
import { View, Image, ScrollView } from "react-native"
import { useSelector } from "react-redux"

import { selectToken } from "../store/user/selectors"
import { contentValidator, lengthValidator } from "../helpers/Validations"
import { styles } from "../StyledComponents/loginScreen"
import { Form } from "../helpers/Form"

const image = { uri: "https://thumbs.gfycat.com/HealthyOrderlyHuman-max-1mb.gif" }

export default function LoginScreen({ navigation }){
  const token = useSelector(selectToken)

  if(token !== null){
    navigation.navigate("Home")
  }
    const custom = styles
    return (
        <ScrollView
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
                          validators: [contentValidator],
                          inputProps: {
                            keyboardType: 'email-address',
                          },
                        },
                        password: {
                          label: 'Password',
                          validators: [lengthValidator],
                          inputProps: {
                            secureTextEntry: true,
                          },
                        },
                      }}/>
                </View>
        </ScrollView>
    )
}