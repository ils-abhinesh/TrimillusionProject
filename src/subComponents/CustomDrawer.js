import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal,
    StyleSheet,
} from 'react-native';
import { DrawerActions } from '@react-navigation/native';
const width = Dimensions.get('screen').width;
import axios from 'react-native-axios';

const CustomDrawer = ({ navigation, props }) => {
    const [vendorName, setvendorName] = React.useState('');

    const hitcloseDrawer = () => {

        navigation.dispatch(DrawerActions.closeDrawer());

    }

    return (
        <View
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1, backgroundColor: '#fff' }}>
            <View
                style={{
                    backgroundColor: 'rgb(255,109,39)',
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                    flexDirection: 'row',
                }}>
                <View>
                    <View
                        style={{
                            marginLeft: 15,
                            marginTop: 60,
                            width: 80,
                            height: 80,
                            backgroundColor: 'transparent',
                            borderWidth: 2,
                            borderColor: '#fff',
                            borderRadius: 60,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>

                        <View
                            style={{
                                width: 70,
                                height: 70,
                                //backgroundColor: '#fff',
                                borderWidth: 2,
                                borderColor: 'orange',
                                borderRadius: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            {/* <Image
                                    style={{ width: 32, height: 35 }}
                                    source={require('./assets/vendorimpty.png')}
                                /> */}
                        </View>

                    </View>
                </View>
                <View style={{ marginTop: 60 }}>
                    <View style={{ width: width / 2 }}>
                        <Text
                            style={{
                                fontSize: 14,
                                fontWeight: '500',
                                marginLeft: 8,
                                color: '#FFF',
                            }}>
                            vendorName
                        </Text>
                    </View>

                    <View style={{ width: width / 2.23 }}>
                        <Text
                            style={{
                                fontSize: 10,
                                marginTop: -2,
                                fontWeight: '500',
                                marginLeft: 8,
                                color: '#FFF',
                            }}>
                            vendorEmail
                        </Text>
                    </View>

                    <TouchableOpacity onPress={hitcloseDrawer}>

                        <View
                            style={{
                                marginLeft: 5,
                                width: 98,
                                height: 33,
                                marginTop: 15,
                                marginBottom: 20,
                                backgroundColor: '#fff',
                                borderRadius: 9,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text style={{ fontSize: 15, color: 'rgb(255,109,39)' }}>
                                Edit Profile
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginLeft: 10, marginTop: 10 }}>
                <TouchableOpacity
                    style={{ marginLeft: 10, marginTop: 2 }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 8,
                            justifyContent: 'space-between',
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            {/* <Image
                                style={{ width: 18, height: 18, marginTop: 3, marginRight: 20 }}
                                source={require('./assets/my_transactions.png')}
                            /> */}
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    color: 'rgb(55,55,55)',
                                }}>
                                My Transactions
                            </Text>
                        </View>
                        <View />

                    </View>
                    <View
                        style={{
                            height: 0.5,
                            marginTop: 10,
                            backgroundColor: 'rgb(225,225,225)',
                        }}
                    />
                </TouchableOpacity>

            </View>


        </View>
    );
};

export default CustomDrawer;
const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        marginTop: 10,
        width: width / 1.12,
        height: 120,
        marginLeft: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    image1: {
        flex: 1,
        height: '90%',
        marginTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image2: {
        height: '90%',
        width: '100%',
        borderRadius: 12,
        alignSelf: 'center',
    },
    font: {
        flex: 2,
        marginTop: 6,
        marginLeft: 10,
        marginRight: 19,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalView: {
        backgroundColor: 'rgb(240,240,240)',
        width: width / 1.2,
        height: 220,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    openButton: {
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(251,123,41)',
        alignItems: 'center',
        height: 50,
        width: width,
        marginBottom: 0,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
    },
    modalText: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 17,
        marginLeft: 15,
    },
});
