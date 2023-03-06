import React, { FC } from "react";
import {View,Text, StyleSheet, SafeAreaView,Image} from 'react-native';
import SecondaryButton from "../../component/SecondaryButton";
import { lightTheme } from "../../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP } from "../../theme/font";
import { useNavigation } from "@react-navigation/native";
const SelectLocation:FC =()=>{
    const navigation = useNavigation();
    console.log('font==>',dp(15))
return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={require('../../assets/images/logoBlack.png')}/>
        <Text style={{...commonFortSize('500',dp(22),lightTheme.blackWhite),
        marginBottom:dp(30)}}>Select Location</Text>
        <SecondaryButton title={'Abu Dubai'} onPress={()=> navigation.navigate('SelectArea')}/>
        <SecondaryButton title={'Dubai'} onPress={()=> navigation.navigate('SelectArea')}/>
    </SafeAreaView>
)
}
export default SelectLocation;

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        marginVertical:dp(60),
        height:widthPercentageToDP('60'),
        width:widthPercentageToDP('60'),
        resizeMode:'contain'
    }
})