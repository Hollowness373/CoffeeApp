import React from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({ source, value, placeholder, onChangeText, borderWidth, searchBackground, placeholderTextColor}) => {


    return (
    	<View style={[styles.container, {borderWidth: borderWidth, backgroundColor: searchBackground}]}>
            <Image source={source} style={styles.iconStyle} />
    		<TextInput 
                value={value}
                placeholder={placeholder} 
                onChangeText={onChangeText}
                placeholderTextColor={placeholderTextColor}
                style={[styles.inputStyle, {color: placeholderTextColor}]}/>
            <View style={styles.iconStyle}></View>
    	</View>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "80%",
        height: "100%",
        borderRadius: 20,
        flexDirection:"row",
        paddingLeft:20,
        
    },
    inputStyle: {
        width:"80%",
        height: 40,
        paddingLeft: 20
    },
    iconStyle:{
        height:20, 
        width: 20
    }
})

export default CustomInput;