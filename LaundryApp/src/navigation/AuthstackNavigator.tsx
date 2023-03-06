import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectLocation from "../screen/SelectLocation";
import SelectArea from "../screen/SelectArea";
import Signup from "../screen/Signup";
import Login from "../screen/Login.tsx";
import VerificationCode from "../screen/VerificationCode";

type RootStackParamList = {
    SelectLocation: undefined;
    SelectArea: undefined;
    Signup: undefined;
    Login:undefined;
    VerificationCode:undefined
  };
const autoStack = createNativeStackNavigator<RootStackParamList>();
const AuthstackNavigator:FC=()=>{
    return(
<autoStack.Navigator initialRouteName="SelectLocation" screenOptions={{headerShown:false}}>
    <autoStack.Screen name="SelectLocation" component={SelectLocation}/>
    <autoStack.Screen name="SelectArea" component={SelectArea}/>
    <autoStack.Screen name="Signup" component={Signup}/>
    <autoStack.Screen name="Login" component={Login}/>
    <autoStack.Screen name="VerificationCode" component={VerificationCode}/>
</autoStack.Navigator>
    )
}
export default AuthstackNavigator;