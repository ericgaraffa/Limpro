import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem, useDrawerProgress, DrawerToggleButton,
} from '@react-navigation/drawer';
import Home from './Home';
import Animated from "react-native-reanimated";
import Game from './Game';
import Basic_choice from './Basic_choice';
import Format_choice from './Format_choice';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Personalization from "./Personalization";
import {Image, StyleSheet, View} from "react-native";
import * as Font from 'expo-font';
import {useState} from "react";
import Apploading from "expo-app-loading";



const getFonts = () =>
    Font.loadAsync({
        PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    });
function CustomDrawerContent(props) {
    const [fontsloaded, setFontsLoaded] = useState(false);
    const progress = useDrawerProgress();

    const translateX = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });
    if (fontsloaded) {
        return (
            <DrawerContentScrollView {...props} style={{backgroundColor: '#926593'}}>
                <Animated.View style={{transform: [{translateX}]}}>
                    <DrawerItemList {...props} />
                    <DrawerItem labelStyle={styles.label} label="Enregistrements"
                                onPress={() => alert('Link to help')}/>
                    <DrawerItem labelStyle={styles.label} label="Favoris" onPress={() => alert('Link to help')}/>
                    <DrawerItem labelStyle={styles.label} label="Recherche" onPress={() => alert('Link to help')}/>
                    <DrawerItem labelStyle={styles.label} label="Paramètres" onPress={() => alert('Link to help')}/>
                </Animated.View>
            </DrawerContentScrollView>
        );
    } else {
        return (
            <Apploading
                startAsync={getFonts}
                onFinish={() => {
                    setFontsLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerNav() {
    return (
        <View style={styles.container}>
        <Drawer.Navigator
            drawerStyle={{
                height: 100,
            }}
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerLeft: false,
                drawerPosition: "right",
                headerRight: () => <DrawerToggleButton/>,
            }}
        >
            <Drawer.Screen name=" " component={Home}  options={{
                headerLeft: () => (
                    <Image
                        source={require('../assets/LOGO_LIMPRO_jaune.png')}
                        style={{ width: 32, height: 32, marginLeft: 16 }}
                    />
                ),
            }}/>
        </Drawer.Navigator>
        </View>
    );
}

function MyDrawer() {
    return (
        <View style={styles.container}>
            <Stack.Navigator screenOptions={{headerShown: true}}>
                <Stack.Group>
                    <Stack.Screen name="Root" component={DrawerNav} options={{ headerShown: false }}/>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                    <Stack.Screen name="Personalization" component={Personalization} options={{ headerShown: false }}/>
                    <Stack.Screen name="Format_choice" component={Format_choice} options={{ headerShown: false }}/>
                    <Stack.Screen name="Basic_choice" component={Basic_choice} options={{ headerShown: false }}/>
                    <Stack.Screen name="Game" component={Game}/>
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
        fontWeight: 'bold',
        fontFamily: 'PoppinsMedium',
    },
});

export default MyDrawer
