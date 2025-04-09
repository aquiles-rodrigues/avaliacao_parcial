import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Shrek1() {
    const navigation = useNavigation();

    const navigateToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.itemContainer}>
                <Image source={require('@/assets/images/shrek2.jpg')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Sinopse: Os pais da princesa Fiona convidam ela e Shrek
                        para jantar para celebrar seu casamento, mas eles não
                        sabem que os recém-casados são ogros.
                    </Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.text}>
                        Direção: Andrew Adamson, Kelly Asbury, Conrad Vernon
                    </Text>
                    <Text style={styles.text}>
                        Roteiristas: William Steig, Andrew Adamson, Joe Stillman
                    </Text>
                    <Text style={styles.text}>
                        Artistas: Mike Myers, Eddie Murphy, Cameron Diaz
                    </Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.text}>
                        IMDB: 7.4/10
                    </Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={navigateToHome} style={styles.linkButton}>
                    <Text style={styles.linkText}>Voltar para a Home</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#1e2127',
        position: 'relative',
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor: '#282C34',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 300,
        borderRadius: 10,
        marginBottom: 15,
    },
    textContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 24,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 10,
        right: 'auto',
        width: 'auto',
    },
    linkButton: {
        backgroundColor: '#282C34',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    linkText: {
        fontSize: 14,
        color: '#61afef',
        textDecorationLine: 'underline',
    },
});
