import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "./src/component/ThemeContext";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from "./src/component/ThemeContext";

import Introduction from "./src/screens/Introduction";
import Home from "./src/screens/Home";
import Favorites from "./src/screens/Favorites";
import Cart from "./src/screens/Cart";
import Notifications from "./src/screens/Notifications";
import Profile from "./src/screens/Profile";
import Item from "./src/screens/Item";

const { height, width } = Dimensions.get("window");
const Stack =  createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {

  const themes = useTheme();

  return(
    <View style={[styles.tabContainer, {backgroundColor: themes.background}]}>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: [styles.tabNav, {backgroundColor: themes.componentBackground}]}}>
          <Tab.Screen name="Home" component={Home}
              options={{
                  tabBarIcon: ({ color, focused }) => (
                      <Image source={focused? require("./assets/navIcons/homeFilledIcon.png") : require("./assets/navIcons/homeIcon.png")} style={styles.iconStyle}/>
                  )
              }}
          />
          <Tab.Screen name="Favorites" component={Favorites}
           options={{
              tabBarIcon: ({ color, focused }) => (
                  <Image source={focused? require("./assets/navIcons/heartFilledIcon.png") : require("./assets/navIcons/heartIcon.png")} style={styles.iconStyle}/>
              )
          }}
          />
          <Tab.Screen name="Cart" component={Cart}
           options={{
              tabBarIcon: ({ color, focused }) => (
                  <Image source={focused? require("./assets/navIcons/cartFilledIcon.png") : require("./assets/navIcons/cartIcon.png")} style={styles.iconStyle}/>
              )
          }}
          />
          <Tab.Screen name="Notifications" component={Notifications}
           options={{
              tabBarIcon: ({ color, focused }) => (
                  <Image source={focused? require("./assets/navIcons/notificationFilledIcon.png") : require("./assets/navIcons/notificationIcon.png")} style={styles.iconStyle}/>
              )
          }}
          />
          <Tab.Screen name="Profile" component={Profile}
           options={{
              tabBarIcon: ({ color, focused }) => (
                  <Image source={focused? require("./assets/navIcons/profileFilledIcon.png") : require("./assets/navIcons/profileIcon.png")} style={styles.iconStyle}/>
              )
          }}
          />
      </Tab.Navigator>
    </View>
  )
}



const App = () => {


  return(
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introduction" screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS}}>
          <Stack.Screen name="Introduction" component={Introduction}/>
          <Stack.Screen name="TabScreens" component={TabScreens}/>
          <Stack.Screen name="Item" component={Item}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tabNav: {
    height: height/12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopWidth: 0
    //overflow: "hidden"
},
iconStyle: {
    height: 25,
    width: 25,
}

});

export default App;