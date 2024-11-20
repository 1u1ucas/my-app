import { Stack } from "expo-router";
import Header from "./parts/header";
import Footer from "./parts/footer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Header />   
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="recette" options={{title: 'meals', headerShown: false }} />
        <Stack.Screen name="drawer" options={{title: 'paramètre', headerShown: false }} />
      </Stack>
      <Footer />
    </GestureHandlerRootView>
  )
}

// Stack est un container qui permet de gérer les différentes routes pour les pages de notre application.
// Stack.Screen quand à lui permet de définir une route pour une page de notre application.
// le fais d'avoir mis Recette/[id] permet de dire que la page est dynamique est que l'id est un paramètre de notre page.
