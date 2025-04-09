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
                <Image source={require('@/assets/images/shrek1.jpg')} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Sinopse: O ogro Shrek perde sua paz quando um cavaleiro
                        força personagens de contos de fadas a morarem no
                        pântano. Decidido a ter sua paz de volta, ele parte em
                        uma missão de resgate de uma princesa para o tal lorde.
                    </Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.text}>
                        Direção: Andrew Adamson, Vicky Jenson
                    </Text>
                    <Text style={styles.text}>
                        Roteiristas: William Steig, Ted Elliott, Terry Rossio
                    </Text>
                    <Text style={styles.text}>
                        Artistas: Mike Myers, Eddie Murphy, Cameron Diaz
                    </Text>
                    <Text style={styles.text}> </Text>
                    <Text style={styles.text}>
                        IMDB: 7.9/10
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
