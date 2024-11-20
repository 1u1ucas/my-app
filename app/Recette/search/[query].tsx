import { useEffect, useState,} from 'react';
import {View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import RecettesPage from '../index';
import { useLocalSearchParams } from 'expo-router';

export default function Search() {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    const params =  useLocalSearchParams();
    const mealQuery= params.query;

    useEffect(() => {
        (async () => {
            if (typeof mealQuery === 'string') {
                setSearch(mealQuery);
                const mealsJson = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealQuery}`);
                const meals = await mealsJson.json();
                setMeals(meals.meals);
            }
        })();
      }, []);
      
    const handleSearch = async () => {
        const mealsJson = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const meals = await  mealsJson.json();
        setMeals(meals.meals);};

    return (
        
       <View>
    {(meals === null || meals.length === 0) ? (
        <Text>Loading...</Text>
      ) : (
        <View>
       <View style={styles.container}>
            <TextInput  style={styles.input} placeholder="Rechercher une recette" 
            onChangeText={text => setSearch(text)}
            value={search}/>
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>Rechercher</Text>
            </TouchableOpacity>
        </View>
        <RecettesPage recepies={meals}/>
        </View>
      )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    input: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
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
});