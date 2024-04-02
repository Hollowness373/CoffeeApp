import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useTheme } from "../ThemeContext";
import ChocolateButtons from '../radioButtons/ChocolateButtons';
import SizeButtons from '../radioButtons/SizeButtons';


const ItemInfo = ({itemDescription, decrement, increment, quantity, typeOfChocolatesPressed, onCoffeeSize, data, size }) => {


  const themes = useTheme();
  const [ lineNum,  setLineNum ] = useState(2);
  const [ showTxt, setShowTxt ] = useState("Read More");
 
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
    return <View style={styles.chocContainer}>
      {data.map((item, key) =>
        <ChocolateButtons focused={item.focused} typeOfChocolatesPressed={() => typeOfChocolatesPressed({key})} item={item} key={key}/>
      )}
    </View>
  }

  const CoffeeSize = () => {
    return <View style={styles.sizeContainer}>
      {size.map((item, key) => 
        <SizeButtons focused={item.focused} onCoffeeSize={() => onCoffeeSize({key})} item={item} key={key} />
      )}
    </View>
  }

  return (
    <View style={styles.container}>
          <Text style={[styles.desciption, {color: themes.tagline}]}>Description</Text>
          <Text numberOfLines={lineNum} style={[styles.descripTXT,{color: themes.tagline}]}>{itemDescription}</Text>
          <Text onPress={onShowTxt} style={[styles.txtReadM,{color: themes.tagline}]}>...{showTxt}</Text>
          <Text style={[styles.desciption, {color: themes.tagline, marginTop: 10}]}>Choice of Chocolate</Text>
          <ChocolateTypes/>
          <View style={styles.containSizeQuantity}>
            <View style={{width: "50%"}}>
              <Text style={[styles.desciption, {color: themes.tagline}]}>Size</Text>
              <CoffeeSize />
            </View>
            <View style={{width: "50%"}}>
              <Text style={[styles.desciption, {color: themes.tagline, alignSelf: "center"}]}>Quantity</Text>
              <View style={styles.containIncrementDecrement}>
                <TouchableOpacity onPress={decrement}>
                  <Image source={require("../../../assets/icons/minusIcon.png")} style={{height: 40, width: 40}} />
                </TouchableOpacity>
                <View style={styles.quantityValueContainer}>
                  <Text style={{fontSize: 18, fontWeight: "bold", color: themes.tagline}}>{quantity}</Text>
                </View>
                <TouchableOpacity onPress={increment}>
                  <Image source={require("../../../assets/icons/plusIcon.png")} style={{height: 40, width: 40}} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 10,
    },
    desciption: {
        fontSize: 20,
        fontWeight: "bold"
    },
    descripTXT: {
      marginTop: 10,
      lineHeight: 25,
    },
    txtReadM: {
      fontWeight: "bold",
      lineHeight: 25
    },
    // Chocolate Type Container
    chocContainer: {
      flexDirection: "row", 
      justifyContent: "space-evenly", 
      marginTop: 20
    },
    // Coffee Size Container
    sizeContainer: {
      flexDirection: "row", 
      width: "100%", 
      justifyContent: "space-evenly", 
      marginTop: 10
    },
    containSizeQuantity: { 
      flexDirection: "row",
      width: "100%", 
      marginVertical: 20
    },
    containIncrementDecrement: {
      flex: 1, 
      flexDirection: "row", 
      width: "100%", 
      marginTop: 10, 
      justifyContent: "flex-end"
    },
    quantityValueContainer: {
      height: "100%", 
      width: "40%", 
      justifyContent: "center", 
      alignItems: "center"
    }
});

export default ItemInfo;