import React, { FC, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { commonFortSize, PixelToDP as dp, widthPercentageToDP as wp } from "../../theme/font";
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { lightTheme } from "../../theme/color";
import MainBtnComponent from "../../component/MainBtnComponent";
const VerificationCode: FC = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: 4 });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.image}
                source={require('../../assets/images/logoBlack.png')} />
            <View style={styles.subContainer}>
                <Text style={styles.verification}>Verification sent</Text>
                <Text style={styles.sixDigitCode}>Enter 6-digit code sent at</Text>
                <Text style={styles.number}>+961 254 2578 255</Text>

                <CodeField
                    ref={ref}
                    {...props}
                    // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                    value={value}
                    onChangeText={setValue}
                    cellCount={4}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <Text
                            key={index}
                            style={[styles.cell, isFocused && styles.focusCell]}
                            onLayout={getCellOnLayoutHandler(index)}>
                            {symbol || (isFocused ? <Cursor /> : null)}
                        </Text>
                    )}
                />

                <Text style={styles.resend}>Resend Code</Text>

                <MainBtnComponent title={'Verify'} onPress={()=>{}}/>
            </View>
        </SafeAreaView>
    )
}
export default VerificationCode;
const styles = StyleSheet.create({
    container: {
        // flex:1,
        justifyContent: 'center',
        // alignItems:'center'
    },
    image: {
        marginVertical: dp(25),
        height: wp('40'),
        width: wp('40'),
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 60,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 1,
        borderBottomColor: lightTheme.lightBlackWhite,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    subContainer: {
        marginHorizontal: dp(20)
    },
    verification:{
        ...commonFortSize('500',dp(25),lightTheme.blackWhite)
    },
    sixDigitCode:{
        ...commonFortSize('400',dp(15),lightTheme.lightBlackWhite),
        marginTop:dp(10)
    },
    number:{
        ...commonFortSize('400',dp(14),lightTheme.primary),
        marginTop:dp(10)
    },
    resend:{
        ...commonFortSize('400',dp(15),lightTheme.lightBlackWhite),
        marginTop:dp(40),
        alignSelf:'center'
    }


})