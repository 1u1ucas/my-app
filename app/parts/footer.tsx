import { Text, View, StyleSheet, Image} from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.text}>CuitoChef - 2021</Text>
    </View> 
  );
}

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        backgroundColor: '#c0392b',
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
});


