import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ChocolateButtons = ({item, typeOfChocolatesPressed, focused}) => {

  return (
    <TouchableOpacity onPress={typeOfChocolatesPressed} style={[styles.chocTypeContainer, {backgroundColor: focused? "#967259" : "#FFFFFF" }]}>
            <Text style={{color: focused? "#FFFFFF" : "black"}}>{item.value}</Text>
    </TouchableOpacity>
  )
}

export default ChocolateButtons

const styles = StyleSheet.create({
    chocTypeContainer: {
        height: 40, 
        width: "32%", 
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#967259",
        borderWidth: 1
      }
})