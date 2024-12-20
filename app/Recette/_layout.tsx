import { Stack } from "expo-router";

export default function MealsLayout() {
  return (
    <>  
      <Stack>
        <Stack.Screen name="id/[id]" options={{title: 'recette', headerShown: false}}  />
        <Stack.Screen name="search/[query]" options={{title: 'recette rechercher', headerShown: false}}  />
        <Stack.Screen name="(tabs)" options={{ headerShown: false}}  />
      </Stack>
    </>
  )
}

// Stack est un container qui permet de gérer les différentes routes pour les pages de notre application.
// Stack.Screen quand à lui permet de définir une route pour une page de notre application.
// le fais d'avoir mis Recette/[id] permet de dire que la page est dynamique est que l'id est un paramètre de notre page.
