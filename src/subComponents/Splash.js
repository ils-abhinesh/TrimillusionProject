import React from 'react';
import { SafeAreaView, Dimensions, View, StatusBar, Text, ImageBackground, Image } from 'react-native';
const { width, height } = Dimensions.get("window");

import { icons, images, SIZES, COLORS, FONTS, string } from '../constants'
const Splash = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(255,255,255)' }}>
            <StatusBar backgroundColor="rgb(255,255,255)" barStyle="dark-content" />
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{ width: width, height: height, alignItems: 'center', justifyContent: 'center' }}
                    source={images.background}
                >
                    <View style={{ flex: 1, alignContent: 'center', justifyContent: 'space-between', }}>
                        <View />
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ color: 'rgb(0,0,0)', fontSize: 34, fontFamily: 'OpenSans-SemiBoldItalic', marginBottom: 15 }}>{string.TRIMILLUSTION}</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 35 }}>
                            <Text style={{ color: 'rgb(0,0,0)', fontSize: 14, fontFamily: 'OpenSans-Regular', marginBottom: 15 }}>{string.POWEREDBY}</Text>
                            <Image style={{ width: 180, height: 35, }}
                                source={images.AAC_LogoBIGG} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
};

export default Splash;
