import React, { useState, useEffect } from 'react'
import { View, StatusBar, Text, SafeAreaView, Image, TextInput, ScrollView, Dimensions, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native'
const { width, height } = Dimensions.get("window");
import { icons, images, SIZES, COLORS, FONTS, string } from '../constants'
import { FontFamilyStyle } from '../constants/FontFamilyStyle'
const EnterOtp = ({ props, navigation }) => {

    const [email, setEmail] = useState('')
    const [newpassword, setNewPassword] = useState('')
    const [confirmpassword, setConfirmpassword] = useState('')


    const backToLogin = () => {
        navigation.navigate('Signin')
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
                <StatusBar backgroundColor="rgb(255,255,255)" barStyle="dark-content" />
                <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{}}>
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
                            }}>
                                <Text style={{ fontSize: 18, marginLeft: 17, marginTop: 29, ...FontFamilyStyle.openSansBold, }}>Enter OTP</Text>
                                <View style={{
                                    width: width / 1.12,
                                    alignItems: 'center',
                                }}>
                                    <View style={styles.viewfirstTextinput}>
                                        <View style={styles.viewSecondTextinput}>
                                            <TextInput
                                                style={styles.Textinput}
                                                placeholder='Enter OTP'
                                                placeholderTextColor="rgba(0,0,0,0.8)"
                                                keyboardType="email-address"
                                                onChangeText={value =>
                                                    setEmail({ email: value.toLowerCase() })
                                                }
                                                value={email}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 18, marginLeft: 17, marginTop: 29, ...FontFamilyStyle.openSansBold, }}>Enter OTP</Text>
                                <View style={{
                                    width: width / 1.12,
                                    alignItems: 'center',
                                }}>
                                    <View
                                        style={styles.viewfirstTextinput}>
                                        <View style={styles.viewSecondTextinput}>
                                            <TextInput
                                                style={styles.Textinput}
                                                placeholder='Enter new password'
                                                placeholderTextColor="rgba(0,0,0,0.8)"
                                                onChangeText={value =>
                                                    setNewPassword({ newpassword: value })
                                                }
                                                value={newpassword}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.viewfirstTextinput}>
                                        <View style={styles.viewSecondTextinput}>
                                            <TextInput
                                                style={styles.Textinput}
                                                placeholder='Confirm new password'
                                                placeholderTextColor="rgba(0,0,0,0.8)"
                                                keyboardType="email-address"
                                                onChangeText={value =>
                                                    setConfirmpassword({ confirmpassword: value })
                                                }
                                                value={confirmpassword}
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
                                        <View></View>
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
                                            onPress={backToLogin} >
                                            <Text style={{ fontSize: 18, color: '#ffffff', fontFamily: 'OpenSans-Bold' }}>
                                                SUBMIT
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
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

export default EnterOtp

var styles = StyleSheet.create({

    viewfirstTextinput: {
        marginTop: 22,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: width / 1.13,
    },
    viewSecondTextinput: {
        borderRadius: 6,
        borderColor: 'rgb(0,0,0)',
        borderWidth: 1,
        height: 50,
        width: width / 1.25,
    },
    Textinput: {
        height: 50,
        width: width / 1.25,
        marginLeft: 15,
        color: 'rgba(0,0,0,0.8)',
        fontSize: 14,
    },

});
