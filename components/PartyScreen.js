import React from "react"
import { View, Text, ScrollView } from "react-native"
import { useSelector } from "react-redux"

import { selectDetails } from "../store/party/selectors"
import { styles } from "../StyledComponents/partyScreen"

export default function PartyScreen(){
    const details = useSelector(selectDetails)
    const custom = styles
    
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
                <Text
                    style={custom.text}>
                    {`${details.ticketLink === null ?"Tickets been pulled" :details.ticketLink}`}
                </Text>
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