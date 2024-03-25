import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const SizeButtons = ({ item, focused, onCoffeeSize}) => {
  return (
    <TouchableOpacity onPress={onCoffeeSize} style={[styles.container, {backgroundColor: focused? "#967259" : "#D9D9D9"}]}>
            <Text style={{color: focused? "#FFFFFF" : "black", fontSize: 16,}}>{item.value}</Text>
    </TouchableOpacity>
  )
}

export default SizeButtons;

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    }
})