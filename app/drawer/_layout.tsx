import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text } from "react-native";
import Parametre from "./parametre";

const ParametreLayout = () => {
    return (
        <View>
            <Text>Parametre</Text>
        </View>
    )
}

const UserLayout = () => {
    return (
        <View>
            <Text>User</Text>
        </View>
    )
}


const ParameterDrawerLayout = () => {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="parametre" component={ParametreLayout} />
        <Drawer.Screen name="user" component={UserLayout} />
    </Drawer.Navigator>
  );
}

export default ParameterDrawerLayout;

