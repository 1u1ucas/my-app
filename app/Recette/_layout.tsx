import { Stack } from "expo-router";
import Header from "../parts/header";
import Footer from "../parts/footer";

export default function MealsLayout() {
  return (
    <>
      <Header />   
      <Stack>
        <Stack.Screen name="recette/search/search" options={{title: 'recettes', headerShown: false}}  />
        <Stack.Screen name="recette/[id]" options={{title: 'recette', headerShown: false}}  />
        <Stack.Screen name="recette/search/[query]" options={{title: 'recette rechercher', headerShown: false}}  />
      </Stack>
      <Footer />
    </>
  )
}

// Stack est un container qui permet de gérer les différentes routes pour les pages de notre application.
// Stack.Screen quand à lui permet de définir une route pour une page de notre application.
// le fais d'avoir mis Recette/[id] permet de dire que la page est dynamique est que l'id est un paramètre de notre page.
