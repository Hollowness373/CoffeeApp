import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from "react-native"
import { useTheme } from "../component/ThemeContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import TransparentView from "../component/TransparentView";
import ItemInfo from "../component/itemComponents/ItemInfo";

const { height, width } = Dimensions.get("window");

const Item = () => {

  const price = 4.20;
  const themes = useTheme();
  const route = useRoute();
  const [ quantity, setQuantity ] = useState(1);
  const [ totalPrice, setTotalPrice ] = useState(price);
  const navigation = useNavigation();
  const { itemData } = route.params;

  const decrementBtn = () => {
    if (quantity <= 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  const incrementBtn = () => {
    setQuantity(quantity + 1)
  }
  
  useEffect(() => {
    const value = price * quantity;   // multiplier
    const newValue = value.toFixed(2);  // fixing price value to tenth decimal point.
    setTotalPrice(newValue)
  }, [quantity])
  

  return(
    <View style={[styles.container, {backgroundColor: themes.background}]}>
      <ScrollView 
        style={{flex: 1, width: "100%"}} 
        showsVerticalScrollIndicator={false}>
        <TransparentView 
          itemImage={itemData.itemImage}
          itemName={itemData.itemname}
          addons={itemData.addons}
          rating={itemData.rating}
        />
        <ItemInfo 
          itemDescription={itemData.itemDescription} 
          quantity={quantity} 
          decrement={() => decrementBtn()}
          increment={() => incrementBtn()}
        />
      </ScrollView>
      <View style={[styles.footer, {backgroundColor: themes.background}]}>
          <View style={styles.subContainer}>
            <View style={styles.priceContainer}>
              <Text style={{fontSize: 18, color: themes.tagline}}>Price</Text>
              <View style={styles.pValue}>
                <Text  style={[styles.priceTxt,{ color: "#967259"}]}>$ </Text>
                <Text style={[styles.priceTxt, { color: themes.tagline}]}>{totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.buyBtn}>
              <Text style={{fontSize: 20, color: "#FFF"}}>Buy Now</Text>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  itemImageContainer: {
    height: height/2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  imageStyle: {
    height: "100%", 
    width: "100%", 
    borderRadius: 40
  },
  transparentContainer: {
    height: height/6, 
    width: "100%", 
    position: "absolute", 
    bottom: 0, 
    borderRadius: 40, 
    backgroundColor: 'rgba(52, 52, 52, 0.8)'
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

export default Item;