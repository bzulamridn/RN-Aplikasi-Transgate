import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import {
    Scene,
    Router,
    Actions,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import Home from './../Component/Home/Index';
import Tocity from './../Component/Home/Tocity';
import Booking from './../Component/Home/Booking';

export default class RouteHome extends React.Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="home" initial={true} component={Home} />
                    <Scene key="tocity" component={Tocity} />
                    <Scene key="booking" component={Booking} />
                </Stack>
            </Router>
        )
    }
}