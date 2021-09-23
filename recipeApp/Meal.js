import React, { useState, useEffect } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=0948436210ae4ba19d6b05d5c102c966&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <View style={styles.container}>
      <View style={styles.heading}>{meal.title}</View>
      <View style={styles.img}>
        <img src={imageUrl} alt="recipe" />
      </View>
      
      <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl}>Go to Recipe</a>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 2,
    margin: 1,
    maxWidth: 300,
  },
  heading: {
    textAlign: 'center',
    marginBottom:2,
    fontWeight: 'bold'
  },
  img:{
    marginBottom: 1
  }

})