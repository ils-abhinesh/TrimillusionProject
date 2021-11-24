import React, { Component, useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Authloading from './Authloading';
import CustomDrawer from './CustomDrawer';
import Splash from './Splash';
import Home from '../components/Home'
import Call from '../components/Call'
import Signin from '../components/Signin';
import DpsDealer from '../components/DpsDealer';
import Dpswebsite from '../components/Dpswebsite';
import ForgetPassword from '../components/ForgetPassword';
import EnterOtp from '../components/EnterOtp'

const Navigator = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState('token');
    React.useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    if (isLoading) {
        return <Splash />;
    }
    const AuthStack = createStackNavigator();
    const AuthStackScreen = ({ navigation }) => (
        <AuthStack.Navigator initialRouteName="Signin">
            <AuthStack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="ForgetPassword"
                component={ForgetPassword}
                options={{ headerShown: false }}
            />
            <AuthStack.Screen
                name="EnterOtp"
                component={EnterOtp}
                options={{ headerShown: false }}
            />
        </AuthStack.Navigator>
    );
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();
    const HomeScreenStack = ({ navigation }) => {
        return (
            <Stack.Navigator
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="DpsDealer"
                    component={DpsDealer}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        );
    };
    const CallScreenStack = ({ navigation }) => {
        return (
            <Stack.Navigator
                initialRouteName="Call"
            >
                <Stack.Screen
                    name="Call"
                    component={Call}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="Dpswebsite"
                    component={Dpswebsite}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        );
    };
    const DrawerScreen = ({ navigation }) => (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer navigation={navigation} />}>
            <Drawer.Screen
                name="Home"
                component={HomeScreenStack}
            />
            <Drawer.Screen
                name="Call"
                component={CallScreenStack}
                options={{
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    );
    const RootStack = createStackNavigator();
    const RootStackScreen = ({ userToken }) => {
        return (
            <RootStack.Navigator headerMode="none" initialRouteName="AuthLoading">

                <RootStack.Screen
                    name="AuthLoading"
                    component={Authloading}
                    options={{ animationEnabled: false }}
                />

                <RootStack.Screen
                    name="HomeApp"
                    component={DrawerScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
                <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{
                        animationEnabled: false,
                    }}
                />
            </RootStack.Navigator>
        );
    };

    return (
        <NavigationContainer>
            <RootStackScreen userToken={userToken} />
        </NavigationContainer>
    );
};

export default Navigator;
