import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"

import { selectComments } from "../store/party/selectors"

export default function CommentsScreen(){
    const comments = useSelector(selectComments)
    console.log("comments from state", comments)
    
    return (
        <View>
            <Text>
                Comments here!
            </Text>
        </View>
    )
}