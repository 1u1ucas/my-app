import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const meals = [
    {
      id: 1,
      title: "Spaghetti bolognaise",
      description: "Des pâtes avec de la sauce tomate et de la viande hachée",
      image: "https://assets.afcdn.com/recipe/20160419/14652_w1024h1024c1cx2420cy1872.jpg",
      category: "pasta",
    },
    {
      id: 2,
      title: "Salade César",
      description: "Une salade avec de la salade verte, du poulet, des croûtons et de la sauce César",
      image: "https://images.ricardocuisine.com/services/recipes/8440.jpg",
      category: "salad",
    },
    {
      id: 3,
      title: "Tarte aux pommes",
      description: "Une tarte sucrée avec des pommes",
      image: "https://static.750g.com/images/1200-675/a96d46e59b4f0ab8169c7cb0cb932a84/la-cuisson.jpg ",
      category: "dessert",
    },
    {
      id: 4,
      title: "Risotto aux champignons",
      description: "Un risotto crémeux avec des champignons",
      image: "https://www.bonjourdarling.com/wp-content/uploads/2020/02/risotto_champignon-1600x1200.jpg",
      category: "pasta",
    },
    {
      id: 5,
      title: "Salade niçoise",
      description: "Une salade avec des tomates, des oeufs, des olives, du thon et des haricots verts",
      image: "https://www.fromager.net/wp-content/uploads/2023/11/recette-salade-nicoise.jpg",
      category: "salad",
    },
    {
      id: 6,
      title: "Tiramisu",
      description: "Un dessert italien avec du café, des biscuits et du mascarpone",
      image: "https://img.cuisineaz.com/1024x768/2023/11/20/i196570-tiramisu-simple.jpg",
      category: "dessert",
    },
  ];

export default function SinglePage() {
    
    const params =  useLocalSearchParams();
    const mealId = parseInt(params.id);
    const meal = meals.find((meal) => meal.id === mealId);

    if (!meal) {
        return (
            <View>
                <Text>Recette introuvable</Text>
            </View>
        );
    }
  return (
    <ScrollView>
        <View style={styles.container}>
            <Image source={{uri: meal.image}} style={styles.image} />
            <Text style={styles.title}>{meal.title}</Text>
            <Text style={styles.description}>{meal.description}</Text>
        </View>
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
