import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { useSelector } from "react-redux"

import HomeScreen from "../components/HomeScreen"
import LoginScreen from "../components/LoginScreen"
import SignUpScreen from "../components/SignUpScreen"
import PartiesScreen from "../components/PartiesScreen"
import PartyScreen from "../components/PartyScreen"
import CommentsScreen from "../components/CommentsScreen"
import ProfileScreen from "../components/ProfileScreen"
import OwnerScreen from "../components/OwnerScreen"
import { selectToken, selectUser } from "../store/user/selectors"

const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()
const PartyStack = createStackNavigator()

function PartyScreenStack(){
  return (
    <PartyStack.Navigator>
      <PartyStack.Screen 
        name="Parties" 
        component={PartiesScreen} 
        options={{
          title: "Party List", 
          headerStyle: {
            backgroundColor: "#003152",
          },
          headerTitleStyle: {
            color: "tomato",
          }}} />
      <PartyStack.Screen 
        name="PartyDetails" 
        component={PartyTabs} 
        options={{
          title: "Party Info",
          headerStyle: {
            backgroundColor: "#003152",
          },
          headerTitleStyle: {
            color: "tomato",
          }
        }} />
    </PartyStack.Navigator>
  )
}

function RegisterTabs(){
  return (
    <TopTab.Navigator
      initialRouteName="Login"
      tabBarOptions={{
        style: { backgroundColor: "#003152"},
        activeTintColor: "tomato",
        inactiveTintColor: "gray",

      }}>
      <TopTab.Screen 
        name="Login" 
        component={LoginScreen} />
      <TopTab.Screen name="Sign-up" component={SignUpScreen} />
    </TopTab.Navigator>
  )
}

function PartyTabs(){
  return (
    <TopTab.Navigator
      initialRouteName="Details"
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}>
      <TopTab.Screen 
        name="Details" 
        component={PartyScreen} 
      />
      <TopTab.Screen name="Comments" component={CommentsScreen} />
    </TopTab.Navigator>
  )
}


export default function Nav(){
  const token = useSelector(selectToken)
  const user = useSelector(selectUser)
  
  function userTab(){ 
    if(token === null){
      return <Tab.Screen name="Register" component={RegisterTabs} />
    } else if(token !== null && user.isEventOwner){
      return <Tab.Screen name="User" component={OwnerScreen} />
    } else if(token !== null && !user.isEventOwner){
      return <Tab.Screen name="User" component={ProfileScreen} />
    }
  }

return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName

            if(route.name === "Home"){
              iconName = "ios-home"
            } else if(route.name === "Parties"){
              iconName = "ios-planet"
            } else if(route.name === "Register"){
              iconName = "ios-log-in"
            } else if(route.name === "User"){
              iconName= "ios-person"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          activeBackgroundColor: "#B5C9D5",
          inactiveBackgroundColor: "#003152"
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Parties" component={PartyScreenStack} />
        {userTab()}
      </Tab.Navigator>
    </NavigationContainer>
)
}