import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./components/LoginScreen"
import SignUpScreen from "./components/SignUpScreen"
import PartiesScreen from "./components/PartiesScreen"

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

function App() {
  return (
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
        <Stack.Screen name="Login" component={RegisterTabs} options={{ title: "Register"}}/>
        <Stack.Screen name="Parties" component={PartiesScreen} options={{ title: "Disco Disco"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;