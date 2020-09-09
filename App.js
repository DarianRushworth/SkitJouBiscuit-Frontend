import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";

const Stack = createStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;