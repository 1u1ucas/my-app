import { Text, View, ScrollView, StyleSheet, Image} from 'react-native';


export default function Parametre() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Ceci sont les paramètre</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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