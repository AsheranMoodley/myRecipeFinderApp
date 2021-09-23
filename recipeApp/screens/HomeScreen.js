import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import React, { useState } from "react";
import MealList from '../MealList';

import { ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';

import {ScrollView} from 'react-native';
import { Dimensions, TouchableOpacity, SafeAreaView, Button,TextInput, Font } from 'react-native';

function HomeScreen(prop) {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=0948436210ae4ba19d6b05d5c102c966&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <ScrollView style={styles.ScrollView}>
    <ImageBackground
        style={styles.background}
        source={require("../assets/bg3.jpg")}
    >
      <Text style={heading}>Recipe Finder</Text>
      <Text>Enter max Calories for the day:</Text>
      <TextInput 
        style={styles.input}
        type='number'
        placeholder='Enter Calories for the Day [E.g 2000]'
        onChange={handleChange}
      />
  
      <TouchableOpacity style={buttonStyle} onPress={getMealData}>
        <Text>Find Recipes</Text>
        {mealData ? (<MealList mealData={mealData} />) : null}
        
      </TouchableOpacity> 
      <Text> </Text> 
    </ImageBackground>
    </ScrollView>
    

  );
}

const heading = {
    fontSize: 48,
    color: 'black',
    alignItems: 'center',
    height: 80
}

const inputBox = {
    color: 'black',
    height: 900
}

const buttonStyle ={
  borderWidth: 1,
  borderColor: '#777',
  padding: 8,
  margin: 10,
  height: 30,
  width: 250,
  alignItems: 'center',
  backgroundColor: '#dcdcdc',
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 900,
        width: null
    },
    ScrollView: {
        marginHorizontal: 20,
    },input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 250,
    }
})


export default HomeScreen;
