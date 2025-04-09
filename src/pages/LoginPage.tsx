import React, { useState } from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import for navigation typing
import GlobalStyles from '../styles/GlobalStyles';

// Define the types for navigation props
type LoginPageNavigationProp = StackNavigationProp<any, 'Home'>;

interface LoginPageProps {
    navigation: LoginPageNavigationProp;
}

export default function LoginPage(props: LoginPageProps) {
    // Managing state for text inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Redirect function
    function redirecionarPagina() {
        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>

            <TextInput
                style={GlobalStyles.textInput}
                placeholder="Nome de usuário"
                value={username}
                onChangeText={setUsername} // Updating username state
            />

            <TextInput
                style={GlobalStyles.textInput}
                placeholder="Senha"
                secureTextEntry // Makes the input field secure (for password)
                value={password}
                onChangeText={setPassword} // Updating password state
            />

            <Button title="Acessar" color="green" onPress={redirecionarPagina} />
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: '#1e2127',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 24,
        marginBottom: 20,
    },
};
