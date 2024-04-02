import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { getCartItems, deleteItemFromAsyncStorage } from "../component/AsyncStorageUtils";
import { useTheme, useThemeUpdate } from "../component/ThemeContext";
import { useFocusEffect } from "@react-navigation/native";
import ItemCartComponent from "../component/ItemCartComponent";


const { height, width } = Dimensions.get("window");
const headNavHeight = height / 14;
const headNavMargin = height / 20;

const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const themes = useTheme();

  useFocusEffect(
    React.useCallback(() => {
      const fetchCartItems = async () => {
        const items = await getCartItems();
        setCartItems(items);
      };
  
      fetchCartItems();
    }, [])
  )

  const onClick = () => {
    console.log(cartItems)
  }

  const onDel = () => {
    deleteItemFromAsyncStorage('cart');
  }

  const DisplayItems = () => {
    return <View>
      {cartItems.map((data, index) => (
        <ItemCartComponent 
          chocolate={data[0].chocolate}
          size={data[0].size}
          quantity={data[0].quantity}
          total={data[0].total}
          name={data[0].name}
          imgURL={data[0].image}
          componentBackground={themes.componentBackground}
          data={data} 
          subKey={index} 
          key={index}

        />
      ))}
    </View>
  }
  

  return(
    <View style={[styles.container, {backgroundColor: themes.background}]}>
        <View style={styles.headNav}>
          <View style={{height: 30, width: 30}}></View>
          <Text onPress={onClick} style={[styles.txtBold, {color: themes.title}]}>Cart</Text>
          <TouchableOpacity onPress={onDel}>
            <Image source={require("../../assets/icons/deleteIcon.png")} style={styles.deleteIcon} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.txtBold, {color: themes.title}]}>Items ({cartItems.length})</Text>
        <View style={{flex: 1, backgroundColor: themes.listBackground}}>
          <DisplayItems />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headNav: {
    height: headNavHeight,
    width: "100%",
    marginTop: headNavMargin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    //backgroundColor: "red"
  },
  deleteIcon: {
    height: 35, 
    width: 35,
  },
  txtBold: {
    fontSize: 20,
    fontWeight: "bold",
  },

});

export default Cart;