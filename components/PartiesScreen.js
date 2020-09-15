import React from "react"
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"

import { selectParties } from "../store/parties/selectors"
import { partyFetcher } from "../store/parties/actions"
import { styles } from "../StyledComponents/partiesScreen"


export default function PartiesScreen({route, navigation}){
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    // console.log("party test", parties)
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

    function moreParties(){dispatch(partyFetcher(parties.length))}

    return (
        <FlatList
            data={parties}
            renderItem={renderParty}
            keyExtractor={(item) => (item.id).toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => moreParties()}
        />
    )
}