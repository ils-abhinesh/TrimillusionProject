import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'

import IconAntDesign from 'react-native-vector-icons/AntDesign'
const Home = ({ props, navigation }) => {

    const [dataitems, setDataitems] = useState([])

    const openDrawer = () => {
        navigation.openDrawer();

    }
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView></SafeAreaView>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 20, marginBottom: 14, fontFamily: 'OpenSans-Bold' }}>Home 1</Text>
            </View>
            <TouchableOpacity onPress={openDrawer}>
                <Text >open Drawer</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Home

var styles = StyleSheet.create({
    linearGradient: {
        // flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});