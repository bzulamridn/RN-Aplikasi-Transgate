import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Index extends React.Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View>
                <View style={{ padding: 25, height: 150, justifyContent: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                            <Image source={require('./../assets/img/elon.jpg')} style={{ height: 50, width: 50, borderRadius: 50, marginRight: 10 }} />
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Zul Amri DN</Text>
                                <Text style={{ fontSize: 10 }}>Point 1.200</Text>
                            </View>
                        </View>
                        <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: '#1abc9c', width: 100, height: 35,flexDirection:'row', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="plus-circle" size={15} color="white" style={{ marginRight: 10 }} /><Text style={style.text}>Top Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15, marginTop: -35 }}>
                    <View >
                        <View style={style.mainBox}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ width: "50%", height: 40, padding: 10, backgroundColor: '#16a085', borderTopLeftRadius: 8, flexDirection:'row', alignItems:'center' }}><Icon name="wallet" size={15} color="white" style={{ marginRight: 10 }} /><Text style={style.text}>Saldo</Text></View>
                                <View style={{ width: "50%", height: 40, padding: 10, alignItems: 'flex-end', backgroundColor: '#16a085', borderTopRightRadius: 8 }}><Text style={style.text}>Rp 200.000</Text></View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: -30, padding: 5 }}>
                                <TouchableOpacity style={{ width: "25%", padding: 5, borderRadius: 8, alignItems: 'center', justifyContent: 'flex-start' }} onPress={() => Actions.tocity()}>
                                    <Image source={require('./../assets/img/taxi.png')} style={{ height: 35, width: 45, marginBottom: 10 }} />
                                    <Text style={style.text}>Taksiin</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: "25%", padding: 5, borderColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Image source={require('./../assets/img/rent.png')} style={{ height: 35, width: 45, marginBottom: 10 }} />
                                    <Text style={style.text}>Sewain</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: "25%", padding: 5, borderColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Image source={require('./../assets/img/moveit.png')} style={{ height: 35, width: 50, marginBottom: 10 }} />
                                    <Text style={style.text}>Angkutin</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: "25%", padding: 5, borderColor: 'white', borderRadius: 50, alignItems: 'center', justifyContent: 'flex-start' }}>
                                    <Image source={require('./../assets/img/stir.png')} style={{ height: 35, width: 35, marginBottom: 10 }} />
                                    <Text style={style.text}>Anterin</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const style = StyleSheet.create({
    mainBox: {
        height: 150,
        backgroundColor: '#1abc9c',
        borderRadius: 8,
        elevation: 3
    },
    backHead: {
        height: '50%',
        backgroundColor: '#2980b9'
    },
    headBox: {
        width: '100%'
    },
    headTitle: {
        width: '50%'
    },
    text: {
        fontWeight: 'bold',
        color: 'white'
    }
})