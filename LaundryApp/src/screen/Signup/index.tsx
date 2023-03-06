import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {View,Text, StyleSheet, SafeAreaView,Image, TouchableOpacity} from 'react-native';
import MainBtnComponent from "../../component/MainBtnComponent";
import SecondaryButton from "../../component/SecondaryButton";
import TextInputComponent from "../../component/TextInputComponent";
import { lightTheme } from "../../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP } from "../../theme/font";

const Signup:FC =()=>{
    const navigation = useNavigation();
return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={require('../../assets/images/logoBlack.png')}/>
       
        <TextInputComponent placeHolder="Full Name"/>
        <TextInputComponent placeHolder="Email"/>
        <TextInputComponent placeHolder="Phone Number"/>
        <TextInputComponent placeHolder="Password"/>
        <MainBtnComponent title={'Sign Up'} onPress={()=>{}}/>

        <Text style={styles.txt}>Forgot Password?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.txt}>Already have an account? Log In</Text>
        </TouchableOpacity>
       
    </SafeAreaView>
)
}
export default Signup;

const styles = StyleSheet.create({
    container:{
        // flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        marginVertical:dp(20),
        height:widthPercentageToDP('40'),
        width:widthPercentageToDP('40'),
        resizeMode:'contain'
    },
    txt:{
        ...commonFortSize('400',dp(12),lightTheme.primary),
        marginTop:dp(15),
        marginBottom:dp(10)
    }
})