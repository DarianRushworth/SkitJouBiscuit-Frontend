import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Provider as StoreProvider } from "react-redux"
import { Provider as PaperProvider } from "react-native-paper"
import rootReducer from "./store/rootReducer"
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen"
import SignUpScreen from "./components/SignUpScreen"
import PartiesScreen from "./components/PartiesScreen"
import PartyScreen from "./components/PartyScreen"
import CommentsScreen from "./components/CommentsScreen"


const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator();

function RegisterTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Sign-up" component={SignUpScreen} />
    </Tab.Navigator>
  )
}

function PartyTabs(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Details" component={PartyScreen} />
      <Tab.Screen name="Comments" component={CommentsScreen} />
    </Tab.Navigator>
  )
}

function App() {
  return (
    <StoreProvider store={rootReducer} >
      <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "orange"
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center"
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Skit Jou Biscuit"}}/>
        <Stack.Screen name="Parties" component={PartiesScreen} options={{ title: "Disco Disco"}}/>
        <Stack.Screen name="Login" component={RegisterTabs} options={{ title: "Register"}}/>
        <Stack.Screen name="Details" component={PartyTabs} options={{ title: "Stomp Those Feet"}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    </StoreProvider>
  );
}

export default App;