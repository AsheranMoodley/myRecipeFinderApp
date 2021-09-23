import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, Image, SafeAreaView, Button, View, ImageBackground } from 'react-native';
import logo from './assets/logo-red.png';

import * as RootNavigation from './RootNavigation'

export default function Footer(props) {
    return (
        //TouchabaleOpcaity is basically a button
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                //onPress is an inline error functions
                //call navigate from rootNav
                onPress={() => RootNavigation.navigate('Welcome')}
            ><Text>Welcome</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Recipes')}
            ><Text>Find Recipes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate('Camera')}
            ><Text>Add picture</Text>
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    button: {
        padding: 20
    }
});