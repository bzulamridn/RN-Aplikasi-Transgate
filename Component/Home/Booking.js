import React from 'react';
import { Text, View, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Fumi, Kohana, Makiko } from 'react-native-textinput-effects';
import { SliderBox } from "react-native-image-slider-box";

export default class Booking extends React.Component {
    render() {
        return (
            <ScrollView style={{ padding: 10 }}>
                <View style={{ borderWidth: 0.1, borderRadius: 8, backgroundColor: 'white' }}>
                    <View style={{ padding: 20 }}>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                            <View style={{ flex: 1, flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                                <Image source={require('./../assets/img/elon.jpg')} style={{ height: 50, width: 50, borderRadius: 50, marginRight: 10 }} />
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Zul Amri DN</Text>
                                    <Text style={{ fontSize: 10 }}>Point 1.200</Text>
                                </View>
                            </View>
                            <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.alert()} style={{ padding: 10, backgroundColor: '#1abc9c', borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex: 1 }}>
                                    <Icon name="play-circle" size={15} color="white" style={{ marginRight: 10 }} /><Text style={{ color: 'white' }}>Lihat Review</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>

                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', height: 60, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#ecf0f1' }}>
                        <View style={{ width: '35%', flexDirection: 'row', paddingLeft: 20, alignItems: 'center' }}>
                            <Text>PNK</Text>
                            <Icon name="arrow-right" size={12} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
                            <Text>SKW</Text>
                        </View>
                        <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'center', borderLeftWidth: 0.5, borderRightWidth: 0.5 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                <Icon name="clock" size={15} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
                                <Text>08.00</Text>
                            </View>
                        </View>
                        <View style={{ width: '35%', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 20 }}>
                            <Text>Tersisa 2 Kursi</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', height: 60, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#ecf0f1' }}>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold' }}>AVANZA G 2017 - KB 2127 CG</Text>
                        </View>
                    </View>
                    <View style={{ padding: 10, backgroundColor: '#ecf0f1' }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: 'red', borderRadius: 5, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: 'white' }}>1</Text>
                                <Text style={{ fontSize: 14, color: 'white' }}>Diboking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#bdc3c7', borderRadius: 5, margin: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="clock" size={15} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
                                <Text style={{ fontSize: 14, color: 'black' }}>Supir</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: 'white', borderRadius: 5, margin: 10, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: 'black' }}>2</Text>
                                <Text style={{ fontSize: 14, color: 'black' }}>Tersedia</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: 'white', borderRadius: 5, margin: 10, borderWidth: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: 'black' }}>3</Text>
                                <Text style={{ fontSize: 14, color: 'black' }}>Tersedia</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                        </View>
                        <View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}