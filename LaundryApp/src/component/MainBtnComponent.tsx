import React, { FC } from "react";
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';
import { lightTheme } from "../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP as wp } from "../theme/font";

interface props{
title:String,
onPress:()=>{}
}

const MainBtnComponent:FC<props>=({title,onPress}) =>{
return (
   <TouchableOpacity style={style.button} onPress={()=>onPress()}>
    <Text style={style.btnText}>{title}</Text>
   </TouchableOpacity>
)}
export default MainBtnComponent;
const style = StyleSheet.create({
button:{
    backgroundColor:lightTheme.primary,
    height: dp(50),
    width:wp('90'),
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:dp(30)
},
btnText:{
    ...commonFortSize('400',dp(15),lightTheme.mainBtnTxt),
//   fontSize:dp(15),
//   fontWeight:'400',
//   color:lightTheme.primary,
   
}
})