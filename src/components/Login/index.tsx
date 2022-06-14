import * as React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';

import styles from './styles';

function Login() {
    return (
        <KeyboardAvoidingView style={styles.backgroundLogin}>
            <View style={styles.container}>
                <Title style={styles.text}> Login </Title>
                <TextInput
                    style={styles.input}
                    label="Email"
                    
                />
                <TextInput
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    right={<TextInput.Icon name="eye" />}
                />
                <Button
                    style={styles.submit}
                    icon="login" mode="contained" onPress={() => console.log('Login click')}>
                    Login
                </Button>
            </View>
        </KeyboardAvoidingView>

    )
}




export default Login;