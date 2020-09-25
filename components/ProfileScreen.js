import React, { useState } from "react"
import { View, Text, Modal, TouchableHighlight } from "react-native"
import { Avatar } from "react-native-elements"
import { useSelector } from "react-redux"

import { selectUser } from "../store/user/selectors"
import { styles } from "../StyledComponents/profileScreen"
import  { Form } from "../helpers/Form"
import { contentValidator } from "../helpers/Validations"

export default function ProfileScreen(){
    const [modalForm, setModalForm] = useState(false)
    const [modalAttending, setModalAttending] = useState(false)
    const [modalMaybe, setModalMaybe] = useState(false)
    const user = useSelector(selectUser)
    const custom = styles

    function avatarFunction(data){
        if(data === "form"){
            console.log(modalForm)
            setModalForm(true)
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
                onPress={() => {
                    avatarFunction(data.function)
                    }
                }
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
            <View
                style={custom.modalView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalForm}
                >
                    <View
                        style={custom.modalView2}>
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
                                }
                            }} />
                        <TouchableHighlight
                            onPress={() => setModalForm(false)}>
                            <Text
                                style={custom.modalText}>
                                Close
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        </View>
    )
}