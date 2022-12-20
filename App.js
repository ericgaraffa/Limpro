import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {supabase} from "./config/DatabaseConnection";
import Nav from "./components/Nav";
import {useState, useEffect} from 'react';
import Word from './components/word';
import {Card} from 'react-native-paper';

export default function App() {
    return (
        <View style={styles.container}>
            <Nav/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
