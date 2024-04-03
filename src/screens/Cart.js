import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from "react-native";
import { getCartItems, deleteItemFromAsyncStorage } from "../component/AsyncStorageUtils";
import { useTheme } from "../component/ThemeContext";
import { useFocusEffect } from "@react-navigation/native";
import ItemCartComponent from "../component/ItemCartComponent";


const { height, width } = Dimensions.get("window");
const headNavHeight = height / 14;
const headNavMargin = height / 20;

const Cart = () => {

  const themes = useTheme();
  const [ cartItems, setCartItems ] = useState([]);
  const [ totalPrice, setTotalPrice ] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      const fetchCartItems = async () => {
        const items = await getCartItems();
        let val = 0;      // setting total price
        items.forEach(innerArray => {
          innerArray.forEach(item => {
            val += parseFloat(item.total);
          });
        });
        const totalValue = val.toFixed(2);  // fixing price value to tenth decimal point.
        setTotalPrice(totalValue);
        setCartItems(items);
        
      };
  
      fetchCartItems();
    }, [])
  )

  const onClick = () => {
    console.log(cartItems)
  }

  const onBuy = () => {
    console.log("Checkout")
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
    <View style={[styles.screen, {backgroundColor: themes.background}]}>
        <View style={[styles.container, {backgroundColor: themes.background}]}>
          < View style={styles.headNav}>
            <View style={{height: 30, width: 30}}></View>
            <Text onPress={onClick} style={[styles.txtBold, {color: themes.title}]}>Cart</Text>
            <TouchableOpacity onPress={onDel}>
              <Image source={require("../../assets/icons/deleteIcon.png")} style={styles.deleteIcon} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.txtBold, {color: themes.title}]}>Items ({cartItems.length})</Text>
          <View style={{flex: 1, backgroundColor: themes.listBackground}}>
            <ScrollView style={{flex: 1, width: "100%"}}  showsVerticalScrollIndicator={false}>
              <DisplayItems />
            </ScrollView>
          </View>
        </View>
        <View style={[styles.footer, {backgroundColor: themes.background}]}>
          <View style={styles.subContainer}>
            <View style={styles.priceContainer}>
              <Text style={{fontSize: 18, color: themes.tagline}}>Price</Text>
              <View style={styles.pValue}>
                <Text  style={[styles.priceTxt,{ color: "#967259"}]}>$ </Text>
                <Text style={[styles.priceTxt, { color: themes.tagline}]}>{totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={onBuy} style={styles.buyBtn}>
              <Text style={{fontSize: 20, color: "#FFF"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
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
  },
  deleteIcon: {
    height: 35, 
    width: 35,
  },
  txtBold: {
    fontSize: 20,
    fontWeight: "bold",
  },
  // Footer
  footer: {
    height: height / 12, 
    width: width,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    
  },
  priceTxt: {
    fontSize: 25, 
    fontWeight: "bold",
  },
  subContainer: {
    flex: 1, 
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between",
  },
  priceContainer: {
    height: "100%", 
    width: "25%", 
    alignItems: "center"
  },
  pValue: {
    flexDirection: "row", 
    position: "absolute", 
    bottom: 0
  },
  buyBtn: {
    height: "100%", 
    width: "60%", 
    borderRadius: 50, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#967259"
  }

});

export default Cart;