import React, {useEffect, useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const { height, width } = Dimensions.get("window");

const ItemCartComponent = ({data, subKey, imgURL, name, total, quantity, size, chocolate, componentBackground}) => {

    const onCheck = () => {
        //console.log(total, quantity, size, chocolate, imgURL)
        console.log(data)
    }

    return(
        <TouchableOpacity style={[styles.container,{backgroundColor: componentBackground}]}
            onPress={onCheck}
            key={subKey} 
        >
            <View style={{backgroundColor: "blue", height: 100, width: 100}}>
                <Image source={{uri: imgURL}} style={{height: "100%", width: "100%"}}/>
            </View>
            <Text>{name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: height * 0.15,
        padding: 20, 
        marginBottom: 20, 
        borderRadius: 20,

    }
})

export default ItemCartComponent;