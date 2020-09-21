import React from "react"
import { Text, View } from "react-native"
import { useSelector } from "react-redux"
import { Card } from "react-native-elements"

import { selectComments } from "../store/party/selectors"

export default function CommentsScreen(){
    const comments = useSelector(selectComments)
    console.log("comments from state", comments)

    if(comments.length === 0){
    return (
        <View>
            <Text>
                Comments here!
            </Text>
        </View>
    )
    } else {
        return comments.map(comment => {
            return (
                <Card
                    key={comment.id}>
                    <Card.Title>
                        {comment.user.fullName}
                    </Card.Title>
                    <Card.Divider />
                    <View>
                        <Text>
                            {comment.input}
                        </Text>
                    </View>
                </Card>
            )
        })
    }
}