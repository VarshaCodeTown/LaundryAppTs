import React, { FC } from "react";
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { lightTheme } from "../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP as wp } from "../theme/font";

interface props{
title:String,
onPress:()=>void
}

const SecondaryButton:FC<props>=({title,onPress}) =>{
return (
   <TouchableOpacity style={style.button} onPress={()=> onPress()}>
    <Text style={style.btnText}>{title}</Text>
   </TouchableOpacity>
)}
export default SecondaryButton;
const style = StyleSheet.create({
button:{
    backgroundColor:lightTheme.secondaryButton,
    height: dp(50),
    width:wp('90'),
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginVertical:dp(10)
},
btnText:{
    ...commonFortSize('400',dp(18),lightTheme.primary),
//   fontSize:dp(15),
//   fontWeight:'400',
//   color:lightTheme.primary,
   
}
})