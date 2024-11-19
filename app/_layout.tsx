import { Stack } from "expo-router";
import Header from "./parts/header";
import Footer from "./parts/footer";

export default function RootLayout() {
  return (
    <>
      <Header />   
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="Recette" options={{title: 'recettes', headerShown: false}}  />
        <Stack.Screen name="Recette/[id]" options={{title: 'recette', headerShown: false}}  />
      </Stack>
      <Footer />
    </>
  )
}
