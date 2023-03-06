import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {View,Text, StyleSheet, SafeAreaView,Image} from 'react-native';
import SecondaryButton from "../../component/SecondaryButton";
import { lightTheme } from "../../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP } from "../../theme/font";

const SelectArea:FC =()=>{
    const navigation = useNavigation();
return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={require('../../assets/images/logoBlack.png')}/>
       
        <SecondaryButton title={'Dubai Marina'} onPress={()=> navigation.navigate('Login')}/>
        <SecondaryButton title={'Media City'} onPress={()=> navigation.navigate('Login')}/>
        <SecondaryButton title={'Sport City'} onPress={()=> navigation.navigate('Login')}/>
        <SecondaryButton title={'Internet City'} onPress={()=> navigation.navigate('Login')}/>
    </SafeAreaView>
)
}
export default SelectArea;

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        marginVertical:dp(50),
        height:widthPercentageToDP('60'),
        width:widthPercentageToDP('60'),
        resizeMode:'contain'
    }
})