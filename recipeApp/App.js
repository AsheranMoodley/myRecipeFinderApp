import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importing nav ref
import { navigationRef } from './RootNavigation';
const Stack = createStackNavigator();

//importing the screens
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';

import Footer from './Footer';

export default function App() {
  return (
    //container for navigation
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Recipes"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
        />
        
      </Stack.Navigator>
      <Footer></Footer>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
