import React, { useState } from "react"
import { View, Text } from "react-native"
import { Avatar } from "react-native-elements"
import { useSelector } from "react-redux"

import { selectUser } from "../store/user/selectors"
import { styles } from "../StyledComponents/profileScreen" 

export default function ProfileScreen(){
    const user = useSelector(selectUser)
    const custom = styles

    function avatarFunction(data){
        if(data === "form"){
            console.log("form")

        } else if(data === "going"){
            console.log("going")
        } else if(data === "interested"){
            console.log("interested")
        }
    }

    function avatarDisplay(data){
        return (
            <Avatar
                size="medium"
                rounded
                title={data.title}
                containerStyle={data.style}
                titleStyle={custom.avatarText}
                onPress={() => avatarFunction(data.function)}
            />
        )
    }

    return (
        <View
            style={custom.container}>
            <View
                style={custom.fadingContainer}>
                <Text
                    style={custom.fadingText}>
                    {user.fullName}
                </Text>
            </View>
            <View
                style={custom.avatarContainer}>
                {avatarDisplay({title: "Update", function: "form", style: custom.avatar1})}
                {avatarDisplay({title: "Attending", function: "going", style: custom.avatar2})}
                {avatarDisplay({title: "Maybes", function: "interested", style: custom.avatar3})}
            </View>
        </View>
    )
}