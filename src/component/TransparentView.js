import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"
import { useTheme } from "../component/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const { height, width } = Dimensions.get("window");

const TransparentView = ({itemImage, itemName, addons, rating}) => {

    const themes = useTheme();
    const navigation = useNavigation();

    const onBack = () => {
        navigation.goBack();
    }

    const onFave = () => {
        
    }

    return(
        <View style={styles.itemImageContainer}>
          <Image source={{uri : itemImage}} style={styles.imageStyle}/>
          <View style={styles.header}>
            <TouchableOpacity onPress={onBack} style={[styles.btns, {backgroundColor: themes.componentBackground}]}>
                <Image source={themes.iconColor? require("../../assets/icons/backBIcon.png") : require("../../assets/icons/backWIcon.png")} style={{height: 30, width: 30}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onFave} style={[styles.btns, {backgroundColor: themes.componentBackground}]}>
                <Image source={require("../../assets/icons/heartRed.png")} style={{height: 30, width: 30}} />
            </TouchableOpacity>
          </View>
          <View style={styles.transparentContainer}>
            <View style={[styles.divider, {paddingLeft: 30,}]}>
                <Text style={styles.coffeName}>{itemName}</Text>
                <Text style={styles.subTxt}>{addons}</Text>
                <View style={{flex: 1, flexDirection: "row", alignItems: "flex-end"}}>
                    <Image 
                        source={require("../../assets/icons/ratingIcon.png")} 
                        style={{height: 20, width: 20}}
                    />
                    <Text style={styles.rating}>{rating}</Text>
                </View>
            </View>
            <View style={[styles.divider, {paddingLeft: 10,}]}>
                <View style={{flex: 1, alignItems: "center"}}>
                    <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                        <View style={{alignItems: "center"}}>
                            <Image source={require("../../assets/icons/beanIcon.png")} style={{height: 30, width: 30}}/>
                            <Text style={[styles.subTxt, {marginTop: 10}]}>Coffee</Text>
                        </View>
                        <View style={{alignItems: "center"}}>
                            <Image source={require("../../assets/icons/dropIcon.png")} style={{height: 30, width: 30}}/>
                            <Text style={[styles.subTxt, {marginTop: 10}]}>Chocolate</Text>
                        </View>
                    </View>
                    <View style={{position: "absolute", bottom: 0}}>
                        <Text style={{color: "#FFF", fontSize: 16, letterSpacing: 1}}>Medium Roasted</Text>
                    </View>
                </View>
            </View>
          </View>
        </View>
    )

}

const styles = StyleSheet.create({
    itemImageContainer: {
      height: height/2,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 40
    },
    header: {
        height: 50, 
        width: "100%", 
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        top: 20, 
        paddingLeft: 15, 
        paddingRight: 15,
    },
    imageStyle: {
      height: "100%", 
      width: "100%", 
      borderRadius: 40
    },
    transparentContainer: {
      height: height/6, 
      width: "100%",
      flexDirection: "row",
      position: "absolute", 
      bottom: 0, 
      borderRadius: 40, 
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
    divider: {
        height: "100%", 
        width: "50%", 
        paddingTop: 20,  
        paddingRight: 30, 
        paddingBottom: 20
    },
    coffeName: {
        fontSize: 25, 
        fontWeight: "500", 
        letterSpacing: 2, 
        color: "#FFF"
    },
    rating: {
        fontSize: 20, 
        fontWeight: "500", 
        letterSpacing: 2, 
        color: "#FFF", 
        marginLeft: 10
    },
    subTxt: {
        color: "#FFF", 
        opacity: 0.8, 
        letterSpacing: 1
    },
    btns: {
        height: 50, 
        width: 50, 
        borderRadius: 25, 
        justifyContent: "center", 
        alignItems: "center", 
    }
  });

export default TransparentView;