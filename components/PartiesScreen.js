import React from "react"
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"


import { styles } from "../StyledComponents/partiesScreen"

const imageUrl = { uri: "https://s3.amazonaws.com/media.citizine.tv/uploads/2016/01/12/origin-1.jpg"}

export default function PartiesScreen({route, navigation}){
    const { data } = route.params 
    const custom = styles
    
    const renderParty = ({item}) => (
        <View 
        style={custom.container}>
        <TouchableOpacity
            onPress={() => moreDetails(item.id)}>
            <Image
                style={custom.image}
                source={{uri:`${item.image}`}}
                resizeMethod={"resize"}
            />
            <View 
                style={custom.text}>
                <Text
                    style={custom.textTitle}>
                    {item.eventName}
                </Text>
                <Text>
                    {`${item.month}, ${item.duration}
                    ${item.country}`}
                </Text>
            </View>
        </TouchableOpacity>
        </View>
    )

    function moreDetails(partyId){navigation.navigate("Details", {id: partyId})}

    return (
        <FlatList
            data={data}
            renderItem={renderParty}
            keyExtractor={(item, index) => item.id.toString()}
        />
    )
}