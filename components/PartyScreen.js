import React from "react"
import { View, Text, ScrollView, Linking, Image } from "react-native"
import { Avatar, Badge } from "react-native-elements"
import { useSelector, useDispatch } from "react-redux"

import { selectDetails, selectStatusData } from "../store/party/selectors"
import { newPartyStatus } from "../store/party/actions"
import { styles } from "../StyledComponents/partyScreen"

export default function PartyScreen(){
    const dispatch = useDispatch()
    const details = useSelector(selectDetails)
    const status = useSelector(selectStatusData)
    const custom = styles

    function linkTicket(){
        if(details.ticketLink !== null)
        Linking.openURL(`${details.ticketLink}`)
    }

    function ticketImage(){
        if(details.ticketLink === null){
                const noTicket = { uri: "https://gifimage.net/wp-content/uploads/2017/10/disappointed-gif.gif" }
                return noTicket
        } else {
                const ticket = { uri: "https://vignette.wikia.nocookie.net/degrassi/images/1/19/Tumblr_lyu2b3q9cS1qjb59to1_500.gif/revision/latest/scale-to-width-down/340?cb=20141101014303"}
                return ticket
        }
    }

    function goingStatusDisplay(){
        return (
            <View
                style={custom.avatarContainer}>
                <Avatar 
                    size="small"
                    rounded
                    title="GOING"
                    containerStyle={custom.avatar1}
                    titleStyle={custom.avatarText} 
                    onPress={() => {
                        dispatch(newPartyStatus(details.id, "going"))
                    }} />
                <Badge 
                    status="success"
                    containerStyle={{
                        position: "absolute",
                        top: -8,
                        left: 20,
                    }} 
                    value={status.going} />
                <Avatar
                    size="small"
                    rounded
                    title="Maybe"
                    containerStyle={custom.avatar2}
                    titleStyle={custom.avatarText} 
                    onPress={() => {
                        dispatch(newPartyStatus(details.id, "interested"))
                    }}/>
                <Badge 
                    status="success"
                    containerStyle={{
                        position: "absolute",
                        top: -6,
                        right: -6,
                    }}
                    value={status.interested} />
            </View>
        )
    }
    
    const displayDetails = () => {
        if(!details.id){
            return (
                <Text>
                    Loading...
                </Text>
            )
        } else if(details.id >= 1){
            return (
                <View
                    style={custom.container}>
                <Text
                    style={custom.title}>
                    {`${details.eventName}
                    `}
                </Text>
                {goingStatusDisplay()}
                <Text
                    style={custom.textHead}>
                    Covid-Status:
                </Text>
                <Text>
                    {`${details.covidClosure === true ?"Party has Been Cancelled, there is always next year!"
                                                                    : "Party is on, lets have a wiggle!"}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Date:
                </Text>
                <Text>
                    {`${details.duration}, ${details.month}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Location:
                </Text>
                <Text>
                    {`${details.continent}, ${details.country}, ${details.city ?details.city :"TBA"}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Description:
                </Text>
                <Text
                    style={custom.text}>
                    {`${details.description}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Line-Up:
                </Text>
                <Text
                    style={custom.text}>
                    {`${details.lineUp === null ?"TBA" :details.lineUp}
                    `}
                </Text>
                <Text
                    style={custom.textHead}>
                    Rules:
                </Text>
                <Text
                    style={custom.text}>
                    {`${details.rules}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Accomodation:
                </Text>
                <Text
                    style={custom.text}>
                    {`${details.accomodation === null ?"TBA" :details.accomodation}`}
                </Text>
                <Text
                    style={custom.textHead}>
                    Extra Info:
                </Text>
                <Text
                    style={custom.text}>
                    {`${details.extraInfo === null ?"You have got all information." :details.extraInfo}
                    `}
                </Text>
                <Text
                    style={custom.textHead}>
                    Tickets:
                </Text>
                <Image
                    source={ticketImage()}
                    style={custom.image}
                    onPress={() => linkTicket()}
                />
                </View>
            )
        }
    }
    return (
        <ScrollView>
            {displayDetails()}
        </ScrollView>
    )
}