import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, } from "react-native";
import { useRouter } from 'expo-router';
import { useState, useEffect } from "react";



export default function Index() {
 const [meals, setMeals] = useState([]);

  const router = useRouter();

  const handlePressallPages = () => {
      router
      .push('recette');
  };

  const handlePressSinglePage = (id: number) => {
    router
    .push(`recette/${id}`);
};


useEffect(() => {
  (async () => {
    const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    const meals = await mealsJson.json();
    setMeals(meals.meals);
  })();
}, []);

  const lastThreeMeals = meals.slice(-3);

  return (
    <ScrollView style={styles.app}>
            {(meals === null || meals.length === 0) ? (
        <Text>Loading...</Text>
      ) : (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Bienvenue sur CuitoChef ! 🌟</Text>
          <Text style={styles.Description}>CuitoChef est votre compagnon ultime pour découvrir et partager les meilleures recettes de cuisine. Que vous soyez un chef expérimenté ou un débutant en cuisine, notre application vous offre une vaste collection de recettes délicieuses et faciles à suivre.</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={handlePressallPages}>
            <Text style={styles.buttonText}>Voir toutes les recettes</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Nos recettes du jour 🍽️</Text>
          <FlatList
            data={lastThreeMeals}
            keyExtractor={(item) => item.idMeal}
            renderItem={({ item }) => (
              <View style={styles.meal}>
                <Image source={{ uri: item.strMealThumb }} style={styles.image} />
                <Text style={styles.mealTitle}>{item.strMeal}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePressSinglePage(item.idMeal)}>
                  <Text style={styles.buttonText}>Voir la recette</Text>
                </TouchableOpacity>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  mainContainer: {
    padding: 20,
  },
  container: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#c0392b",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  Description: {
    fontSize: 15,
    color: "gray",
  },
  meal: {
    marginRight: 20,
    width: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  mealTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  mealDescription: {
    color: "gray",
  },
});
