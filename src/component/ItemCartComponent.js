import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useTheme } from "./ThemeContext";

const { height, width } = Dimensions.get("window");

const ItemCartComponent = ({data, subKey, imgURL, name, total, quantity, size, chocolate, componentBackground}) => {

    const themes = useTheme();

    return(
        <View style={[styles.container,{backgroundColor: componentBackground}]}
            key={subKey} 
        >
            <View style={styles.imageContainer}>
                <Image source={{uri: imgURL}} style={styles.imageStyle}/>
            </View>
            <View style={{flex:1}}>
                <Text style={[styles.txtBold, {color: themes.tagline}]}>{name} ({size})</Text>
                <Text style={{color: themes.black}}>with {chocolate}</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", width: "100%", height: "30%", bottom: 0, position: "absolute"}}>
                    <Text style={[styles.txtBold, {color: themes.tagline, fontWeight: "bold"}]}>US ${total}</Text>
                    <Text style={[styles.txtBold, {color: themes.black}]}>x{quantity}</Text>
                </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: height * 0.15,
        padding: 20,  
        marginTop: 20,
        borderRadius: 20,

    },
    imageContainer: {
        height: 100, 
        width: 100, 
        marginRight: 20, 
        borderRadius: 20
    },
    imageStyle: {
        height: "100%", 
        width: "100%", 
        borderRadius: 20
    },
    txtBold: {
        fontSize: 18,
        letterSpacing: 1
    }
})

export default ItemCartComponent;