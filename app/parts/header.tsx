import { Text, View, StyleSheet, Image} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.bandeau}>
            <Image source={require('../../assets/images/icon.png')} style={styles.logo} />
            <Text style={styles.title}>CuitoChef</Text>
        </View>
        <Text style={styles.subtitle}>Découvre ici les meilleurs recette de cuisine!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#c0392b',
    },
    bandeau: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 60,
    },
    logo: {
        width: 50,
        height: 50,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
    },
});
