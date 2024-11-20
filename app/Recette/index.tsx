import { useEffect, useState, } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function RecettesPage({ recepies }: { recepies: any[] }) {
    const [meals, setMeals] = useState<any[]>([]);

    //le useEffect permet de lancer une fonction au chargement de la page
    // on peux aussi lui passer des variables pour qu'il s'execute a chaque fois qu'une variable change

    const router = useRouter();

    const handlePressSinglePage = (id: number) => {
        router
        .push(`/recette/${id}`);
    };

    useEffect(() => {
        setMeals(recepies);
    },[recepies]);

return (
    <View>
        { meals.length === 0 ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.container}>
            <Text style={styles.title}>Recettes</Text>
            <Text style={styles.subtitle}>Découvre ici les meilleurs recettes de cuisine!</Text>
            <FlatList
                data={meals}
                keyExtractor={item => item.idMeal.toString()}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>{item.strMeal}</Text>
                        <Text style={styles.cardDescription}>
                    {item.strInstructions.length > 300 
                        ? `${item.strInstructions.substring(0, 300)}...` 
                        : item.strInstructions}
                </Text>
                        <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
                        <TouchableOpacity onPress={() => handlePressSinglePage(item.idMeal)} style={styles.button}>
                            <Text style={styles.buttonText}>Voir la recette</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginBottom: 0,
        height: '85%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 20,
    },
    card: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardDescription: {
        marginBottom: 10,
    },
    cardImage: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
    },
    button: {
        padding: 10,
        backgroundColor: '#c0392b',
        borderRadius: 5,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: 'white',
    },
});


