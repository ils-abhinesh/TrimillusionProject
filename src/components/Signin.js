import React, { useState, useEffect } from 'react'
import { View, StatusBar, Text, SafeAreaView, Image, TextInput, ScrollView, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("window");
import { icons, images, SIZES, COLORS, FONTS, string } from '../constants'

const Signin = ({ props, navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const goForgotpassword = () => {
        navigation.navigate('ForgetPassword')
    }

    return (
        <View style={{ flex: 1 }}>
            {/* <SafeAreaView></SafeAreaView> */}
            <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
                <StatusBar backgroundColor="rgb(255,255,255)" barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <ImageBackground
                        style={{ width: width, height: height, }}
                        source={images.backgroundImage}
                    >
                        <View style={{
                            flex: 1, alignItems: 'center', justifyContent: 'space-between',

                        }}>
                            <View></View>
                            <View style={{
                                width: width / 1.12, borderRadius: 6, backgroundColor: 'rgb(255,255,255)',
                                opacity: 0.83,
                                alignItems: 'center',
                            }}>
                                <Text style={{ fontSize: 18, marginTop: 22, fontFamily: 'OpenSans-Bold' }}>Sign In to your Account</Text>
                                <View
                                    style={styles.viewTextinput}>
                                    <View
                                        style={styles.imageView}
                                    >
                                        <Image style={{ width: 16, height: 19, }}
                                            source={icons.avtar} />
                                    </View>
                                    <View style={styles.emailTextinput}>
                                        <TextInput
                                            style={styles.textinput}
                                            placeholder='Email Address'
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
                                        marginTop: 30,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: width / 1.13,

                                    }}>
                                    <View
                                        style={styles.imageView}
                                    >
                                        <Image style={{ width: 16, height: 20, }}
                                            source={icons.xmlid} />
                                    </View>
                                    <View style={styles.emailTextinput}>
                                        <TextInput
                                            style={styles.textinput}
                                            placeholder='Password'
                                            placeholderTextColor="rgba(0,0,0,0.8)"
                                            keyboardType="email-address"
                                            onChangeText={value =>
                                                setPassword({ password: value })
                                            }
                                            value={password}
                                        />
                                    </View>
                                </View>
                                <View
                                    style={styles.viewSignin}>
                                    <TouchableOpacity
                                        style={styles.touchableView}
                                    >
                                        <Text style={{ fontSize: 18, color: '#ffffff', fontFamily: 'OpenSans-Bold' }}>
                                            {string.SIGNIN}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 44,
                                        }} onPress={goForgotpassword}>
                                        <Text style={{ fontSize: 12, color: '#222222', fontFamily: 'OpenSans-Regular' }}>
                                            Forgot Password?
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            <View></View>

                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>

        </View>
    )
}

export default Signin

var styles = StyleSheet.create({

    viewSignin: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        flexDirection: 'row',
        height: 50,
        width: width / 1.24,
        marginBottom: 25
    },
    touchableView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2790F2',
        height: 44,
        width: width / 3,
        borderRadius: 6,
    },
    viewTextinput: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: width / 1.13,
    },
    imageView: {
        height: 50, width: 50, borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
        borderColor: 'rgb(0,0,0)',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    emailTextinput: {
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        height: 50,
        width: width / 1.45,
    },
    textinput: {
        height: 50,
        width: width / 1.45,
        marginLeft: 15,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 14,
    }

});
