import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native"
import { useTheme } from "../component/ThemeContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import TransparentView from "../component/TransparentView";

const { height, width } = Dimensions.get("window");

const Item = () => {

  const themes = useTheme();
  const route = useRoute();
  const navigation = useNavigation();
  const { itemData } = route.params

  const click = () => {
    console.log(itemData);
  }

  return(
    <View style={[styles.container, {backgroundColor: themes.background}]}>
        <TransparentView 
          itemImage={itemData.itemImage}
          itemName={itemData.itemname}
          addons={itemData.addons}
          rating={itemData.rating}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
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
  }

});

export default Item;