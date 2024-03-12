import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from "react-native"
import { useTheme, useThemeUpdate } from "../component/ThemeContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import CustomInput from "../component/CustomInput";

const { height, width } = Dimensions.get("window");
const headNavHeight = height / 14;
const numColumns = 2;

const Home = () => {

  const themes = useTheme();
  const navigation = useNavigation();
  const onChangeThemes = useThemeUpdate();

  const [ query, queryCoffee ] = useState();

  return(
    <View style={[styles.container, { backgroundColor: themes.background}]}>
      <View style={styles.headNav}>
          <TouchableOpacity onPress={onChangeThemes}>
            <Image source={require("../../assets/icons/categoryIcon.png")} style={styles.categorySize}/>
          </TouchableOpacity>
          <Image source={require("../../assets/icons/avatarImage.png")} style={styles.userIconSize}/>
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.tagline, {color: themes.tagline}]}>Find the best</Text>
        <Text style={[styles.tagline, {color: themes.tagline}]}>Coffee to your taste</Text>
        <View style={styles.searchBarContainer}>
          <CustomInput
            source={themes.searchIcon? require("../../assets/icons/searchIconLight.png"):require("../../assets/icons/searchIconDark.png")} 
            placeholder={"Find your coffee..."} 
            onChangeText={queryCoffee}
            searchBackground={themes.searchBackground}
            placeholderTextColor={themes.placeholderTextColor}
            borderWidth={themes.borderWidth}
          />
          <View style={{height: "100%", width: "5%"}}></View>
          <TouchableOpacity style={{height: "100%", width: "15%"}}>
            <Image source={require("../../assets/icons/filterButton.png")} style={{height: "90%", width: "100%"}} />
          </TouchableOpacity>
        </View>
        <View style={styles.coffeeTabs}>
          <Text style={[styles.cGenre, {color: "#967259"}]}>Espresso</Text>
          <Text style={[styles.cGenre, {color: themes.title}]}>Latte</Text>
          <Text style={[styles.cGenre, {color: themes.title}]}>Cappuccino</Text>
          <Text style={[styles.cGenre, {color: themes.title}]}>Cafetière</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20
  },
  headNav: {
    height: headNavHeight,
    width: "100%",
    marginTop: headNavHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  categorySize: {
    height: 46, 
    width: 46,
  },
  userIconSize: {
    height: 60, 
    width: 60
  },
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 35,
  },
  contentContainer: {
    flex: 1, 
    width: "100%", 
    paddingTop: 30
  },
  searchBarContainer: {
    height: headNavHeight, 
    width: "100%", 
    marginTop: 30, 
    flexDirection: "row",
    alignItems: "center"
  },
  searchBar: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 60,
  },
  searchIcon: {
    height:20, 
    width: 20, 
    marginLeft: 20, 
    alignSelf: "center"
  },
  coffeeTabs: {
    marginTop: 30,
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  cGenre: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default Home;