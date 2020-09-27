import React, { useState } from "react"
import { View, Text, Modal, TouchableHighlight, Image, ScrollView } from "react-native"
import { Avatar, Card, Badge } from "react-native-elements"
import { useSelector, useDispatch } from "react-redux"

import { selectUser } from "../store/user/selectors"
import { logOut } from "../store/user/actions"
import { profileStatus } from "../store/party/actions"
import { selectStatusData } from "../store/party/selectors"
import { styles } from "../StyledComponents/ownerScreen"
import  { Form } from "../helpers/Form"


export default function OwnerScreen({ navigation }){
    const dispatch = useDispatch()
    const [modalForm, setModalForm] = useState(false)
    const [modalAttending, setModalAttending] = useState(false)
    const [modalMaybe, setModalMaybe] = useState(false)
    const user = useSelector(selectUser)
    const userStatus = useSelector(selectStatusData)
    const custom = styles

    function avatarFunction(data){
        if(data === "form"){
            setModalForm(true)
        } else if(data === "going"){
            setModalAttending(true)
            dispatch(profileStatus())
            console.log("going", userStatus)
        } else if(data === "interested"){
            setModalMaybe(true)
            dispatch(profileStatus())
            console.log("interested")
        } else if(data === "new" && user.isEventOwner){
            console.log("new")
        } else if(data === "remove" && user.isEventOwner){
            console.log("remove")
        } else if(data === "form2" && user.isEventOwner){
            console.log("Update")
        }
    }

    function avatarDisplay(data){
        return (
            <Avatar
                size="large"
                rounded
                title={data.title}
                containerStyle={data.style}
                titleStyle={custom.avatarText}
                onPress={() => avatarFunction(data.function)}
            />
        )
    }

    function statusChecker(data){
        const goingStatus = userStatus.users.filter(stat => stat.status === "going")

        const interestedStatus = userStatus.users.filter(stat => stat.status === "interested")

        if(data === "attending"){
            return(
                goingStatus.map(stat => {
                    return (
                        <View
                            style={custom.cardContainer}
                            key={stat.id}>
                            <Image
                                resizeMode="cover"
                                style={custom.cardImage}
                                source={{ uri: stat.party.image}}
                            />
                            <Text
                                style={custom.cardText}>
                                {stat.party.eventName}
                            </Text>
                        </View>
                    )
                })
            )
        } else if(data === "maybe"){
            return (
                interestedStatus.map(stat => {
                    return (
                        <View
                            style={custom.cardContainer}
                            key={stat.id}>
                            <Image
                                resizeMode="cover"
                                style={custom.cardImage}
                                source={{ uri: stat.party.image}}
                            />
                            <Text
                                style={custom.cardText}>
                                {stat.party.eventName}
                            </Text>
                        </View>
                    )
                })
            )
        }
    }

    function eventCard(){
        console.log(user.isEventOwner)
        if(user.isEventOwner){
            return (
                <Card
                    containerStyle={custom.eventCard}>
                    <Card.Title>
                        Manage Party:
                    </Card.Title>
                    <Card.Divider />
                    <View
                        style={custom.avatarContainer}>
                        {avatarDisplay({title: "Add", function: "new", style: custom.avatar1})}
                        {avatarDisplay({title: "Delete", function: "remove", style: custom.avatar2})}
                        {avatarDisplay({title: "Update", function: "form2", style: custom.avatar3})}
                    </View>
                </Card>
            )
        }
    }

    return (
        <View
            style={custom.container}>
            <View
                style={custom.fadingContainer}>
                <Badge
                    value="Log-Out"
                    status="primary"
                    badgeStyle={{
                        width: 100,
                        height: 30,
                    }}
                    onPress={() => {
                        dispatch(logOut())
                        navigation.navigate("Home")
                    }}
                />
                <Text
                    style={custom.fadingText}>
                    {user.fullName}
                </Text>
            </View>
            <Card
                containerStyle={custom.mainCard}>
                <Card.Title
                    style={custom.mainText}>
                    Click To See:
                </Card.Title>
                <Card.Divider />
            <View
                style={custom.avatarContainer}>
                {avatarDisplay({title: "Update", function: "form", style: custom.avatar1})}
                {avatarDisplay({title: "Attending", function: "going", style: custom.avatar2})}
                {avatarDisplay({title: "Maybes", function: "interested", style: custom.avatar3})}
            </View>
            </Card>
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
            <View
                style={custom.modalView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalAttending}
                >
                    <View
                        style={custom.modalView2}>
                        <Card
                            containerStyle={custom.cardBackground}>
                            <Card.Title
                                style={custom.mainText}>
                                Parties Attending:
                            </Card.Title>
                            <Card.Divider />
                            {statusChecker("attending")}
                        </Card>
                        <TouchableHighlight
                            onPress={() => setModalAttending(false)}>
                            <Text
                                style={custom.modalText}>
                                Close
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
            <View
                style={custom.modalView}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalMaybe}
                >
                    <View
                        style={custom.modalView2}>
                        <Card
                            containerStyle={custom.cardBackground}>
                            <Card.Title
                                style={custom.mainText}>
                                Parties Interested In:
                            </Card.Title>
                            <Card.Divider />
                            {statusChecker("maybe")}
                        </Card>
                        <TouchableHighlight
                            onPress={() => setModalMaybe(false)}>
                            <Text
                                style={custom.modalText}>
                                Close
                            </Text>
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
            {eventCard()}
        </View>
    )
}