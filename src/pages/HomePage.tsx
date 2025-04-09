import React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type HomePageNavigationProp = StackNavigationProp<any, 'ItemDescription'>;

interface HomePageProps {
    navigation: HomePageNavigationProp;
}

export default function HomePage(props: HomePageProps) {
    const movieList = [
        { id: 1, title: 'Shrek', image: require('@/assets/images/shrek1.jpg'), link: 'Shrek1' },
        { id: 2, title: 'Shrek 2', image: require('@/assets/images/shrek2.jpg'), link: 'Shrek2' },
        { id: 3, title: 'Shrek Terceiro', image: require('@/assets/images/shrek3.jpg'), link: 'Shrek3' },
        { id: 4, title: 'Shrek: Para Sempre', image: require('@/assets/images/shrek4.jpg'), link: 'Shrek4' },
    ];

    function goToPage(link: string) {
        props.navigation.navigate(link);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {movieList.map(movieList => (
                <TouchableOpacity
                    key={movieList.id}
                    style={styles.itemContainer}
                    onPress={() => goToPage(movieList.link)}
                >
                    <Image source={movieList.image} style={styles.image} />
                    <Text style={styles.title}>{movieList.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#1e2127',
    },
    itemContainer: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#282C34',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 150,
        marginBottom: 5,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    rootContainer: {
        flex: 1,
        backgroundColor: '#1e2127',
    },
});
