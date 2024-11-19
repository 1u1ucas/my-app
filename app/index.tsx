import { Text, View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, } from "react-native";
import { useRouter } from 'expo-router';



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



export default function Index() {

  const router = useRouter();

  const handlePressallPages = () => {
      router
      .push('Recette');
  };

  const handlePressSinglePage = (id: number) => {
    router
    .push(`Recette/${id}`);
};

  const lastThreeMeals = meals.slice(-3);

  return (
    <ScrollView style={styles.app}>
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
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.meal}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.mealTitle}>{item.title}</Text>
                <Text style={styles.mealDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.button} onPress={() => handlePressSinglePage(item.id)}>
                  <Text style={styles.buttonText}>Voir la recette</Text>
                </TouchableOpacity>
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
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
