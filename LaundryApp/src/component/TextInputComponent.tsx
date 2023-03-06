import React, { FC } from "react";
import {View,Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { lightTheme } from "../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP as wp } from "../theme/font";

interface props{
placeHolder:string,
}

const TextInputComponent:FC<props>=({placeHolder=''}) =>{
return (
    <TextInput style={style.btnText}
     placeholder={placeHolder}
     placeholderTextColor={lightTheme.primary}
    />
)}
export default TextInputComponent;
const style = StyleSheet.create({
btnText:{
    ...commonFortSize('400',dp(16),lightTheme.primary),
    backgroundColor:lightTheme.secondaryButton,
    height: dp(50),
    width:wp('90'),
    alignSelf:'center',
    justifyContent:'center',
    padding:dp(15),
    borderRadius:10,
    marginVertical:dp(10)
}
})