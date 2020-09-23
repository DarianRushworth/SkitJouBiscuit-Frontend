import React from "react"
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import AsyncStorage from "@react-native-community/async-storage"

import { selectParties } from "../store/parties/selectors"
import { selectToken } from "../store/user/selectors"
import { partyFetcher } from "../store/parties/actions"
import { commentFetcher, statusFetcher } from "../store/party/actions"
import { detailFetcher } from "../store/party/actions"
import { styles } from "../StyledComponents/partiesScreen"


export default function PartiesScreen({route, navigation}){
    const dispatch = useDispatch()
    const parties = useSelector(selectParties)
    const token = useSelector(selectToken)
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