import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/bg2.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    //source={require("../assets/logo-red.png")}
                    source={require("../assets/RFLogo.png")}
                />
                <Text> </Text>
                
            </View>
            <Text style={styles.welcomeText}>Welcome to the Recipe Finder App,
                Where finding recipes are made easy
                by just entering the desired total calories
                of your meal and we will suggest the perfect meal
                for you along with a link to the recipe
                Enjoy!
                </Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logo: {
        width: 400,
        height: 280,
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 10,
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: "#FC5C65",
        alignItems: 'center'
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: "cyan",
        alignItems: 'center'
    },
    welcomeText: {
        textAlign:'center',
        padding:10,
        height: 105,
        maxWidth:400,
        fontWeight: 'bold',
        color:"black",
        fontFamily:'sans-serif'
    }
})

export default WelcomeScreen;