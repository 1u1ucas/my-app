import { useEffect, useState,} from 'react';
import {View, TextInput, Button, StyleSheet, Text } from 'react-native';
import RecettesPage from '../index';

export default function Search() {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        (async () => {
          const mealsJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
          const meals = await mealsJson.json();
          setMeals(meals.meals);
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
            onChangeText={text => setSearch(text)}/>
            <Button title="Rechercher" onPress={handleSearch}/>
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
});