import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");
const containerHeight = height / 3.8;

const ItemComponent = ({ imgURL, itemName, addons, price, componentBackground, 
    itemColor, addonsColor, itemData}) => {
    
    const navigation = useNavigation();

    const onItemClick = () => {
        console.log(itemData)
        navigation.navigate("Item", {itemData})
    }

    return(
        <TouchableOpacity onPress={onItemClick} style={[styles.container, {backgroundColor: componentBackground}]}>
            <View style={styles.imageContainer}>
                <Image 
                    source={{uri : imgURL}}
                    style={styles.imageStyle}
                />
            </View>
            <View style={styles.coffeeInfo}>
                <Text style={[styles.itemName, {color: itemColor}]}>{itemName}</Text>
                <Text style={{color: addonsColor}}>{addons}</Text>
                <View style={styles.priceContainer}>
                    <Text style={[styles.priceTxt, {color: "#967259"}]}>$</Text>
                    <Text style={[styles.priceTxt, {color: itemColor, marginLeft: 5}]}>{price}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.addBTN}>
                <Image source={require("../../assets/icons/addBtn.png")} style={{height: 60, width: 60,}}  />
            </TouchableOpacity>
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: containerHeight,
        width: "48%",
        borderRadius: 30,
        padding: 10,
        alignItems: "center",
        marginTop: 20,
        
    },
    imageContainer: {
        height: "60%",
        width: "100%",
    },
    imageStyle: {
        height: "100%",
        width: "100%",
        borderRadius: 30,
    },
    coffeeInfo: {
        flex: 1, 
        width: "100%", 
        padding: 10
    },
    itemName: {
        fontSize: 18, 
        fontWeight: "bold"
    },
    priceContainer: {
        flexDirection: "row", 
        position: "absolute", 
        bottom: 0, 
        marginLeft: 10
    },
    priceTxt: {
        fontSize: 16, 
        fontWeight: "bold",
        letterSpacing: 2
    },
    addBTN: {
        height: 60, 
        width: 60, 
        position: "absolute", 
        bottom: 0, 
        right: 0, 
        borderBottomRightRadius: 30
    }
});


export default ItemComponent;