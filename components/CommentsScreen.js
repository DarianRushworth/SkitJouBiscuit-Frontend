import React, { useState } from "react"
import { Text, View, ScrollView } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { Card, Input } from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"

import { selectComments, selectDetails } from "../store/party/selectors"
import { sendNewComment } from "../store/party/actions"
import { styles } from "../StyledComponents/commentsScreen"

export default function CommentsScreen(){
    const dispatch = useDispatch()
    const [newComment, setNewComment ] = useState("")
    const comments = useSelector(selectComments)
    const party = useSelector(selectDetails)
    
    const custom = styles

    const sendIcon = <Icon name="paper-plane-o" size={20} 
                        onPress={() => {
                            dispatch(sendNewComment(party.id, newComment))
                            setNewComment("")}}
                        />

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
            const { fullName } = comment.user
            return (
                <Card
                    key={comment.id}
                    containerStyle={custom.card}>
                    <Card.Title
                        style={custom.text}>
                        {fullName}
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
                style={custom.inputStyle}
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment-o', size: 20 }}
                rightIcon={sendIcon}
                onChangeText={(value) => setNewComment(value)}
                />
            </View>
        </View>
    )
}