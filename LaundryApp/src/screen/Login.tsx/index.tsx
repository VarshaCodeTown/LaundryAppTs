import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {View,Text, StyleSheet, SafeAreaView,Image, TouchableOpacity} from 'react-native';
import MainBtnComponent from "../../component/MainBtnComponent";
import SecondaryButton from "../../component/SecondaryButton";
import TextInputComponent from "../../component/TextInputComponent";
import { lightTheme } from "../../theme/color";
import { commonFortSize, PixelToDP as dp, widthPercentageToDP } from "../../theme/font";

const Login:FC =()=>{
    const navigation = useNavigation();
return (
    <SafeAreaView style={styles.container}>
        <Image style={styles.image}
        source={require('../../assets/images/logoBlack.png')}/>
        <TextInputComponent placeHolder="Email"/>
        <TextInputComponent placeHolder="Password"/>
        <MainBtnComponent title={'Log In'} onPress={()=> navigation.navigate('VerificationCode')}/>
        <TouchableOpacity>
        <Text style={styles.txt}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
        <Text style={styles.txt}>Don't have an account? Sing Up</Text>
        </TouchableOpacity>
    </SafeAreaView>
)
}
export default Login;

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