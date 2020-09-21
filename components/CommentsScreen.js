import React from "react"
import { Text, View, ScrollView } from "react-native"
import { useSelector } from "react-redux"
import { Card, Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

import { selectComments } from "../store/party/selectors"
import { styles } from "../StyledComponents/commentsScreen"

export default function CommentsScreen(){
    const comments = useSelector(selectComments)
    
    const custom = styles

    const display = () => {
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
                    key={comment.id}
                    containerStyle={custom.card}>
                    <Card.Title
                        style={custom.text}>
                        {comment.user.fullName}
                    </Card.Title>
                    <Card.Divider />
                    <View>
                        <Text
                            style={custom.text}>
                            {comment.input}
                        </Text>
                    </View>
                </Card>
            )
            })
        }
    }

    return (
        <View
            style={custom.input}>
            <ScrollView>
                {display()}
            </ScrollView>
            <View>
            <Input
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                />
            </View>
        </View>
    )
}