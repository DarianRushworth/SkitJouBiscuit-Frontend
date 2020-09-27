import React from "react"
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"
import Flag from "react-native-flags"
import { Card } from "react-native-elements"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from "@react-native-community/async-storage"

import { selectParties } from "../store/parties/selectors"
import { selectToken } from "../store/user/selectors"
import { partyFetcher } from "../store/parties/actions"
import { commentFetcher, statusFetcher } from "../store/party/actions"
import { detailFetcher } from "../store/party/actions"
import { styles } from "../StyledComponents/partiesScreen"


export default function PartiesScreen({ navigation }){
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    const token = useSelector(selectToken)
    const custom = styles
    
    const renderParty = ({item}) => (
        <View 
            style={custom.container}>
        <TouchableOpacity
            onPress={() => moreDetails(item.id)}>
            <Card
                containerStyle={custom.card}>
            <View
                style={custom.cardContainer}>
                <View>
                <Card.Title
                    style={custom.textTitle}>
                    {item.eventName}
                </Card.Title>
                <Flag
                    code={item.country}
                    size={32}
                />
                </View>
                <Card
                    containerStyle={custom.cardDate}>
                    <View
                        style={custom.cardContainer2}>
                    <Card.Title
                        style={custom.cardTitle}>
                        {item.month}
                    </Card.Title>
                    <Card.Divider />
                        <Text
                            style={custom.cardText}>
                            {item.duration}
                        </Text>
                    </View>
                </Card>
                </View>
                <Card.Divider />
                <View>
                    <Image 
                        style={custom.image}
                        resizeMode="cover"
                        source={{ uri: `${item.image}`}} />
                </View>
            </Card>
        </TouchableOpacity>
        </View>
    )

    async function moreDetails(partyId){
        try{
        const tokenStored = await AsyncStorage.getItem("token")
        
        if(token === tokenStored){
            dispatch(commentFetcher(partyId))
            dispatch(statusFetcher(partyId))
        }
        
        dispatch(detailFetcher(partyId))
        navigation.navigate("PartyDetails")

        } catch(error){
            console.log(error.message)
        }
    }

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