import React, { useState, useEffect } from 'react'
import { View, StatusBar, Text, SafeAreaView, Image, TextInput, FlatList, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("window");
import { icons, images, SIZES, COLORS, FONTS, string } from '../constants'
import { FontFamilyStyle } from '../constants/FontFamilyStyle'
const ForgetPassword = ({ props, navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const backToLogin = () => {
        navigation.navigate('Signin')
    }
    const hitbuttonsubmit = () => {
        navigation.navigate('EnterOtp')
    }
    return (
        <View style={{ flex: 1 }}>
            {/* <SafeAreaView></SafeAreaView> */}
            <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
                <StatusBar backgroundColor="rgb(255,255,255)" barStyle="dark-content" />
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        style={{ width: width, height: height, }}
                        source={images.backgroundImage}
                    >
                        <View style={{
                            flex: 1, alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <View></View>
                            <View style={{
                                width: width / 1.12, borderRadius: 10, backgroundColor: 'rgb(255,255,255)',
                                opacity: 0.83,
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 18, marginTop: 29, ...FontFamilyStyle.openSansBold, }}>Forgot Password</Text>
                                <View
                                    style={{
                                        marginTop: 45,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: width / 1.13,

                                    }}>

                                    <View style={{
                                        borderRadius: 6,
                                        borderColor: 'rgb(0,0,0)',
                                        borderWidth: 1,
                                        height: 50,
                                        width: width / 1.25,
                                    }}>
                                        <TextInput
                                            style={{
                                                height: 50,
                                                width: width / 1.25,
                                                marginLeft: 15,
                                                color: 'rgba(0,0,0,0.8)',
                                                fontSize: 14,
                                            }}
                                            placeholder='Enter registered email'
                                            placeholderTextColor="rgba(0,0,0,0.8)"
                                            keyboardType="email-address"
                                            onChangeText={value =>
                                                setEmail({ email: value.toLowerCase() })
                                            }
                                            value={email}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginTop: 35,
                                        flexDirection: 'row',
                                        height: 50,
                                        width: width / 1.25,
                                        marginBottom: 25
                                    }}>
                                    <TouchableOpacity
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 44,
                                            marginLeft: 2
                                        }} onPress={backToLogin}>
                                        <Text style={{ fontSize: 12, color: '#222222', fontFamily: 'OpenSans-Regular' }}>
                                            Back to Login
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#2790F2',
                                            height: 44,
                                            width: width / 3.5,
                                            borderRadius: 6,
                                            marginRight: 2

                                        }}
                                        onPress={hitbuttonsubmit}>
                                        <Text style={{ fontSize: 18, color: '#ffffff', fontFamily: 'OpenSans-Bold' }}>
                                            SUBMIT
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View></View>
                        </View>
                    </ImageBackground>
                </View>
            </View>

        </View>
    )
}

export default ForgetPassword
