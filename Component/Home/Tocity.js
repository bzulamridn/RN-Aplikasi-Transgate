import React from 'react';
import { Text, View, TextInput, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Fumi, Kohana, Makiko } from 'react-native-textinput-effects';
import { SliderBox } from "react-native-image-slider-box";
import { Actions } from 'react-native-router-flux';
export default class Tocity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_1024/https://www.topreneur.id/wp-content/uploads/2019/02/IMG-20190215-WA0009-1024x682.jpg",
                "https://s1.bukalapak.com/img/1848003691/w-1000/Sarung_jok_mobil_Avanza_2012.jpg",
                "https://drivenhype.com/wp-content/uploads/2018/05/387DE532-017E-4ECB-BDDC-75D0FCEFBA50-e1525786461253.jpeg",
                "https://fotos02.autofacil.es/2007/06/interior2-650x471.jpg", // Network image
            ]
        };
    }
    static navigationOptions = {
        header: null,
    };

    alert() {
        Actions.booking()
    }
    render() {
        return (
            <ScrollView>
                  
                <View style={{ width: '100%', backgroundColor: '#1abc9c', padding: 20 }}>
                    <View style={{ height: 40, justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 16 }}>Pilih Destinasi Anda</Text>

                    </View>

                    <View>
                        <Fumi
                            label={'Kota Asal Anda'}
                            iconClass={Icon}
                            iconName={'search'}
                            iconColor={'#16a085'}
                            iconSize={18}
                            iconWidth={40}
                            inputPadding={18}
                            style={{ borderRadius: 5, marginBottom: 8 }}
                        />
                        <Fumi
                            label={'Kota Tujuan Anda'}
                            iconClass={Icon}
                            iconName={'map-marker-alt'}
                            iconColor={'#16a085'}
                            iconSize={20}
                            iconWidth={40}
                            inputPadding={18}
                            style={{ borderRadius: 5, marginBottom: 8 }}
                        />
                        <Fumi
                            label={'Tanggal Keberangkatan'}
                            iconClass={Icon}
                            iconName={'calendar-alt'}
                            iconColor={'#16a085'}
                            iconSize={18}
                            iconWidth={40}
                            inputPadding={18}
                            style={{ borderRadius: 5, marginBottom: 8 }}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', padding: 20,backgroundColor:'#ecf0f1' }}>
                    <View style={{ borderWidth: 0.1, borderRadius: 8, backgroundColor:'white' }}>
                        <View style={{ padding: 20 }}>
                            <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', width: '50%', alignItems: 'center' }}>
                                    <Image source={require('./../assets/img/elon.jpg')} style={{ height: 50, width: 50, borderRadius: 50, marginRight: 10 }} />
                                    <View style={{ flex: 1, flexDirection: 'column' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>Zul Amri DN</Text>
                                        <Text style={{ fontSize: 10 }}>Point 1.200</Text>
                                    </View>
                                </View>
                                <View style={{ width: '50%', alignItems: 'flex-end', justifyContent: 'center'}}>
                                    <TouchableOpacity onPress={() => this.alert()} style={{ padding: 10, backgroundColor: '#1abc9c', borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', zIndex:1 }}>
                                        <Icon name="play-circle" size={15} color="white" style={{ marginRight: 10 }} /><Text style={{ color: 'white' }}>Booking</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View>
                            <SliderBox
                                images={this.state.images}
                                sliderBoxWidth={'100%'}
                                style={{ width: '90%', height: 200 }}
                                autoplay
                                circleLoop
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', width: '100%', justifyContent: 'center', height: 60, alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#ecf0f1' }}>
                            <View style={{ width: '35%', flexDirection: 'row', paddingLeft:20, alignItems:'center' }}>
                                <Text>PNK</Text>
                                <Icon name="arrow-right" size={12} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
                                <Text>SKW</Text>
                            </View>
                            <View style={{ width: '30%', flexDirection: 'row', justifyContent:'center', borderLeftWidth:0.5, borderRightWidth:0.5 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Icon name="clock" size={15} color="black" style={{ marginRight: 10, marginLeft: 10 }} />
                                    <Text>08.00</Text>
                                </View>
                            </View>
                            <View style={{ width: '35%', flexDirection: 'row', justifyContent:'flex-end', paddingRight:20 }}>
                                <Text>Tersisa 2 Kursi</Text>
                            </View>
                        </View>
                    </View>
                </View>

               
            </ScrollView>
        );
    }

}

