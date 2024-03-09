import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native"
import colortheme from "../../assets/colortheme.json"

const { height, width } = Dimensions.get("window")

const Introduction = () => {

  const [ theme, changeTheme ] = useState({});
  const [ currentTheme, setCurrentTheme ] = useState(true)


  const onChangeTheme = () => {
    setCurrentTheme(!currentTheme);
  }

  useEffect(() => {

    if (currentTheme === true) {
      changeTheme(colortheme.lightTheme)
    } else if (currentTheme === false) {
      changeTheme(colortheme.darkTheme)
    } else {
      changeTheme(colortheme.lightTheme)
    }
    console.log(theme);

  }, [currentTheme])


  return(
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <View style={styles.imgContainer}>
          <Image source={require("../../assets/coffeeIntro.png")} style={styles.imgStyle}/>
        </View>
        <View style={styles.viewContainer}>
            <Text style={[styles.txtTitle, {color: theme.title}]}>Stay Focused</Text>
            <Text style={[styles.txtDescription, {color: theme.black}]}>Get the cup filled of your choice to stay focused and awake. Diffrent type of coffee menu, hot lottee cappucino</Text>
            <View style={{height: "20%"}}></View>
            <TouchableOpacity onPress={onChangeTheme} style={styles.nxtBtn}>
              <Text style={styles.btnTxt}>Dive In</Text>
              <Image source={require("../../assets/icons/arrowForwardWIcon.png")} style={styles.arrowRight}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    imgContainer: {
        height: height / 2,
        width: width,
        justifyContent: "center",
        alignItems: "center",
    },
    imgStyle: {
        height: 360, 
        width: 320,
    },
    viewContainer: {
      flex: 1, 
      width: "100%",
      padding: 30,
      justifyContent: "center",
      alignItems: "center",
    },
    txtTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    txtDescription: {
      fontSize: 14,
      marginTop: 20,
      lineHeight: 22,
      textAlign: "center",
    },
    nxtBtn: {
      flexDirection: "row",
      height: height / 14,
      width: "40%",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#967259"
    },
    btnTxt: {
      fontSize: 16,
      color: "#FFFFFF"
    },
    arrowRight: {
      height: 18, 
      width: 18,
      marginLeft: 10
    }
});

export default Introduction;