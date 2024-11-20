import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function Random () {
    const [meals, setMeals] = useState<any[]>([]);
    const [randomMeal, setRandomMeal] = useState<any[]>([]);

    useEffect(() => {
        (async () => {
          const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
          const meals = await mealsJson.json();
          setMeals(meals.meals);
        })();
      }, []);

    const handleRandom = () => {
        const random = Math.floor(Math.random() * meals.length);
        setRandomMeal(meals[random]);
    }



    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={handleRandom}>
                    <Text style={styles.buttonText}>Recette aléatoire</Text>
                </TouchableOpacity>
                {(randomMeal.length === 0) ? (
                    <Text>Appuyez sur le bouton pour obtenir une recette aléatoire</Text>
                ) : (
                    <View>
                        <Image source={{uri: randomMeal.strMealThumb}} style={styles.image} />
                        <Text style={styles.title}>{randomMeal.strMeal}</Text>
                        <Text style={styles.description}>{randomMeal.strInstructions}</Text>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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