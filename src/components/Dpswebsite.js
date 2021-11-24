import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'


const Dpswebsite = ({ props, navigation }) => {

    const [dataitems, setDataitems] = useState([])


    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView></SafeAreaView>
            <View style={{ alignItems: 'center', }}>
                <Text style={{ fontSize: 20, marginBottom: 14 }}>Dpswebsite</Text>
            </View>


        </View>
    )
}

export default Dpswebsite

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