import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTheme } from "../ThemeContext";
import ChocolateButtons from '../radioButtons/ChocolateButtons';

const descriptionTxt = "Lorem ipsum dolor sit amet. Vel placeat omnis aut quibusdam similique et ipsam tenetur id enim ipsam qui error sunt quo nostrum dolorem nam rerum repudiandae";



const ItemInfo = ({itemDescription}) => {


  const themes = useTheme();
  const [ lineNum,  setLineNum ] = useState(2);
  const [ showTxt, setShowTxt ] = useState("Read More");

  const [data , setData ] = useState([
    { value: 'White Chocolate', focused: false },
    { value: 'Milk Chocolate', focused: false },
    { value: 'Dark Chocolate', focused: false },
  ])

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

  const typeOfChocolatesPressed = ({key}) => {
    const newData = [...data]
    if (key == 0) {
      newData[0].focused = true;
      newData[1].focused = false;
      newData[2].focused = false;
    } else if (key == 1) {
      newData[0].focused = false;
      newData[1].focused = true;
      newData[2].focused = false;
    } else if (key == 2) {
      newData[0].focused = false;
      newData[1].focused = false;
      newData[2].focused = true;
    } else {

    }
    setData(newData);
  }

  const ChocolateTypes = () => {
    return <View style={{flexDirection: "row", justifyContent: "space-evenly"}}>
      {data.map((item, key) =>
        <ChocolateButtons focused={item.focused} typeOfChocolatesPressed={() => typeOfChocolatesPressed({key})} item={item} key={key}/>
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