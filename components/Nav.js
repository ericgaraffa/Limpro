import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem, useDrawerProgress, DrawerToggleButton,
} from '@react-navigation/drawer';
import Home from './Home';
import Animated from "react-native-reanimated";
import Game from './Game';
import Basic_choice from './Basic_choice';
import Format_choice from './Format_choice';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Personalization from "./Personalization";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import basic_choice from "./Basic_choice";
import {useNavigation} from "@react-navigation/native";


function CustomDrawerContent(props) {
    const progress = useDrawerProgress();

        return (
            <DrawerContentScrollView {...props} style={{backgroundColor: '#926593'}}>
                <Animated.View>
                    <DrawerItem labelStyle={styles.label} label="Enregistrements"
                                onPress={() => alert('Link to help')}/>
                    <DrawerItem labelStyle={styles.label} label="Favoris" onPress={() => alert('Link to help')}/>
                    <DrawerItem labelStyle={styles.label} label="Paramètres" onPress={() => alert('Link to help')}/>
                </Animated.View>
            </DrawerContentScrollView>
        );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNav() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#380D39',
                        elevation: 0, //ANDROID
                        shadowOpacity: 0, //IOS
                        borderBottomWidth: 0, //IOS
                    },
                    headerLeft: false,
                    drawerPosition: "right",
                    headerRight: () => <DrawerToggleButton/>,
                }}
            >
                <Drawer.Screen name="home" component={Home} options={{
                    title: ''
                }}/>
                <Drawer.Screen name="format_choice" component={Format_choice} options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/LOGO_LIMPRO_jaune.png')}
                                style={{width: 42.5, height: 39, marginLeft: 16, marginBottom: 8, resizeMode:'contain'}}
                            />
                        </TouchableOpacity>
                    ),
                    title: ''
                }}/>
                <Drawer.Screen name="basic_choice" component={basic_choice} options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/LOGO_LIMPRO_jaune.png')}
                                style={{width: 42.5, height: 39, marginLeft: 16, marginBottom: 8, resizeMode:'contain'}}
                            />
                        </TouchableOpacity>
                    ),
                    title: ''
                }}/>
                <Drawer.Screen name="personalization" component={Personalization} options={{
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                source={require('../assets/LOGO_LIMPRO_jaune.png')}
                                style={{width: 42.5, height: 39, marginLeft: 16, marginBottom: 8, resizeMode:'contain'}}
                            />
                        </TouchableOpacity>
                    ),
                    title: ''
                }}/>
            </Drawer.Navigator>
        </View>
    );
}

function MyDrawer() {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Group screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="root" component={DrawerNav}/>
                    <Stack.Screen name="home" component={Home}/>
                    <Stack.Screen name="format_choice" component={Format_choice}/>
                    <Stack.Screen name="basic_choice" component={Basic_choice}/>
                    <Stack.Screen name="personalization" component={Personalization}/>
                    <Stack.Screen name="game" component={Game}/>
                </Stack.Group>
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F0F40'
    },
    label: {
        color: '#340335',
        fontSize: 18,
        fontFamily: "VinaSansRegular",
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 900,
    },
});

export default MyDrawer
