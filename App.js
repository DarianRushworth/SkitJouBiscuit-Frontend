import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "@expo/vector-icons"
import { Provider as StoreProvider } from "react-redux"
import rootReducer from "./store/rootReducer"
import HomeScreen from "./components/HomeScreen"
import LoginScreen from "./components/LoginScreen"
import SignUpScreen from "./components/SignUpScreen"
import PartiesScreen from "./components/PartiesScreen"
import PartyScreen from "./components/PartyScreen"
import CommentsScreen from "./components/CommentsScreen"

const Tab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()
const PartyStack = createStackNavigator()

function PartyScreenStack(){
  return (
    <PartyStack.Navigator>
      <PartyStack.Screen name="Parties" component={PartiesScreen} />
      <PartyStack.Screen name="Details" component={PartyTabs} />
    </PartyStack.Navigator>
  )
}

function RegisterTabs(){
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Login" component={LoginScreen} />
      <TopTab.Screen name="Sign-up" component={SignUpScreen} />
    </TopTab.Navigator>
  )
}

function PartyTabs(){
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Details" component={PartyScreen} />
      <TopTab.Screen name="Comments" component={CommentsScreen} />
    </TopTab.Navigator>
  )
}

function App() {
  return (
    <StoreProvider store={rootReducer} >
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName

            if(route.name === "Home"){
              iconName = "ios-home"
            } else if(route.name === "Parties"){
              iconName = "ios-musical-notes"
            } else if(route.name === "Profile"){
              iconName = "ios-log-in"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Parties" component={PartyScreenStack} />
        <Tab.Screen name="Profile" component={RegisterTabs} />
      </Tab.Navigator>
    </NavigationContainer>
    </StoreProvider>
  );
}

export default App;