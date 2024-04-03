import React, {useState} from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from "react-native";
import { ScrollView } from 'react-native-virtualized-view';
import { useTheme, useThemeUpdate } from "../component/ThemeContext";
import coffeeData from "../../assets/coffeeitems.json";
import CustomInput from "../component/CustomInput";
import ItemComponent from "../component/ItemComponent";

const { height, width } = Dimensions.get("window");
const headNavHeight = height / 14;
const numColumns = 2;

const Home = () => {

  const themes = useTheme();
  const onChangeThemes = useThemeUpdate();

  const [ query, queryCoffee ] = useState();

  return(
    <View style={[styles.container, { backgroundColor: themes.background}]}>
      <ScrollView showsVerticalScrollIndicator={false}>
      
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
            source={themes.iconColor? require("../../assets/icons/searchIconLight.png"):require("../../assets/icons/searchIconDark.png")} 
            placeholder={"Find your coffee..."} 
            onChangeText={queryCoffee}
            value={query}
            searchBackground={themes.componentBackground}
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
        <FlatList
          key={numColumns}
          data={coffeeData}
          numColumns={numColumns}
          style={{backgroundColor: themes.listBackground, flexGrow: 0}}
          columnWrapperStyle={{justifyContent: "space-between"}}
          renderItem={(item) => 
            <ItemComponent 
              imgURL={item.item.image}
              itemName={item.item.itemname}
              itemColor={themes.tagline}
              addons={item.item.addons}
              addonsColor={themes.black}
              price={item.item.price}
              componentBackground={themes.componentBackground}
              itemData={item.item}
            />}
        />
        <View style={{flex: 1, marginTop: 20}}>
          <Text style={[styles.tagline, {color: themes.tagline}]}>Special for you</Text>
          <TouchableOpacity style={[styles.forYou, {backgroundColor: "#967259"}]}>
            <Image source={require("../../assets/icons/recommendedCoffee.png")} style={{height: 130, width: 130, borderRadius: 30}}/>
            <View style={styles.txtContainerStyle}>
              <Text style={styles.txtStyle}>Specially mixed and brewed which you must try!</Text>
              <Text style={[styles.txtStyle, {marginTop: 20}]}>$11.00</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
  },
  forYou: {
    height: 145,
    width: "100%", 
    marginTop: 20, 
    borderRadius: 30,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  txtContainerStyle: { 
    flex: 1, 
    height: "100%", 
    width:"50%", 
    paddingLeft: 30, 
    paddingTop: 10
  },
  txtStyle: {
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#FFF"
  }
});

export default Home;