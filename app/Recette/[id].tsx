import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';

export default function SinglePage() {
  const [meals, setMeals] = useState();

  const params =  useLocalSearchParams();
  const mealId = parseInt(params.id);

  useEffect(() => {
    (async () => {
      const mealsJson = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const meals = await mealsJson.json();
      setMeals(meals.meals[0]);
    })();
  }, []);

  return (
    <ScrollView>
                  {( meals.length === 0) ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
            <Image source={{uri: meal.strMealThumb}} style={styles.image} />
            <Text style={styles.title}>{meal.strMeal}</Text>
            <Text style={styles.description}>{meal.strInstructions}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 15,
    },
});
