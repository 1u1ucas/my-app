import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function MealsLayout() {
  return (
 
      <Tabs>
        <Tabs.Screen name="search" options={{title: 'recettes', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}  />
        <Tabs.Screen name="random" options={{title: 'Random', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="shuffle" color={color} size={size} />
          ),
        }}  />
      </Tabs>

  )
}

// Stack est un container qui permet de gérer les différentes routes pour les pages de notre application.
// Stack.Screen quand à lui permet de définir une route pour une page de notre application.
// le fais d'avoir mis Recette/[id] permet de dire que la page est dynamique est que l'id est un paramètre de notre page.
