import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../component/ThemeContext";


const Cart = () => {

  const themes = useTheme();

  return(
    <View style={[styles.container, {backgroundColor: themes.background}]}>
        <Text>Cart</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }

});

export default Cart;