import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ChocolateButtons = ({item}) => {

    const [ isPressed, setPressed ] = useState(false);
    const [ chocBtn, setChocBtn] = useState("#FFFFFF");
    const [ txtColor, setTxtColor ] = useState("black")

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

  return (
    <TouchableOpacity onPress={typeOfChocolatePressed} style={[styles.chocTypeContainer, {backgroundColor: chocBtn}]}>
            <Text style={{color: txtColor}}>{item.value}</Text>
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