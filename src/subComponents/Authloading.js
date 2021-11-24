import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const Authloading = ({ navigation }) => {
    const getToken = async () => {
        const userLoggedInToken = '1'
        const userNotLoggedIn = '2'
        console.log(`user Token from AuthLoading Screen : ${userLoggedInToken}`);
        console.log(
            `vendor Token from AuthLoading Screen : ${userNotLoggedIn}`,
        );
        if (userLoggedInToken == '1') {
            navigation.navigate('HomeApp');
        } else if (userNotLoggedIn == '1') {
            navigation.push('Auth');
        } else {
            console.log(
                `user Token from AuthLoading Screen else part : ${userLoggedInToken}`,
            );
            console.log(
                `userNotLoggedIn Token from AuthLoading Screen else part : ${userNotLoggedIn}`,
            );
            navigation.push('Auth');
        }
    };
    useEffect(() => {
        //navigation.navigate('Auth');
        getToken();
    }, []);

    return (
        <View style={style.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default Authloading;
