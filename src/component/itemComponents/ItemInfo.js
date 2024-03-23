import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from "../ThemeContext";
import ChocolateButtons from '../radioButtons/ChocolateButtons';

const descriptionTxt = "Lorem ipsum dolor sit amet. Vel placeat omnis aut quibusdam similique et ipsam tenetur id enim ipsam qui error sunt quo nostrum dolorem nam rerum repudiandae";



const ItemInfo = ({itemDescription}) => {


  const themes = useTheme();
  const [ lineNum,  setLineNum ] = useState(2);
  const [ showTxt, setShowTxt ] = useState("Read More");

  /*
  const [ isPressed, setPressed ] = useState(false);
  const [ chocBtn, setChocBtn] = useState("#FFFFFF");
  const [ txtColor, setTxtColor ] = useState("black");

  useEffect(() => {
    if (isPressed == false) {
        setChocBtn("#FFFFFF");
        setTxtColor("black")
    } else if (isPressed == true) {
        setChocBtn("#967259");
        setTxtColor("white")
    }
    
  }, [isPressed])

  const typeOfChocolatePressed = () => {
      setPressed(!isPressed)
  }
  */


  const chocTypes = [
    { value: 'White Chocolate' },
    { value: 'Milk Chocolate' },
    { value: 'Dark Chocolate' },
  ]

  const onShowTxt = () => {
    if (lineNum === 2) {
      setLineNum(0);
      setShowTxt("Show Less");
    } else if (lineNum === 0) {
      setLineNum(2);
      setShowTxt("Show More");
    } else {

    }
  };

  const ChocolateTypes = () => {
    return <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
      {chocTypes.map((item, key) =>
        <ChocolateButtons item={item}/>
      )}
    </View>
    
  }

  return (
    <View style={styles.container}>
          <Text style={[styles.desciption, {color: themes.tagline}]}>Description</Text>
          <Text numberOfLines={lineNum} style={[styles.descripTXT,{color: themes.tagline}]}>{itemDescription}</Text>
          <Text onPress={onShowTxt} style={[styles.txtReadM,{color: themes.tagline}]}>...{showTxt}</Text>
          <Text style={[styles.desciption, {color: themes.tagline, marginTop: 20}]}>Choice of Chocolate</Text>
          <ChocolateTypes/>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
        //backgroundColor: "red"
    },
    desciption: {
        fontSize: 20,
        fontWeight: "bold"
    },
    descripTXT: {
      marginTop: 20,
      lineHeight: 25,
    },
    txtReadM: {
      fontWeight: "bold",
      lineHeight: 25
    },
    // Chocolate Type Component
    chocTypeContainer: {
      height: 40, 
      width: "32%", 
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      borderColor: "#967259",
      borderWidth: 1
    }
});

export default ItemInfo;