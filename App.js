import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./src/component/ThemeContext";

import Introduction from "./src/screens/Introduction";
import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Cart from "./src/screens/Cart";
import Notifications from "./src/screens/Notifications";
import Profile from "./src/screens/Profile";

const Stack =  createStackNavigator();



const App = () => {


  return(
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction" screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}>
          <Stack.Screen name="Introduction" component={Introduction}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Favorites" component={Favorites}/>
          <Stack.Screen name="Cart" component={Cart}/>
          <Stack.Screen name="Notifications" component={Notifications}/>
          <Stack.Screen name="Profile" component={Profile}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});

export default App;