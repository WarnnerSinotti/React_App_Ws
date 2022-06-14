import * as React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Title, TextInput, Button, Divider, Text } from 'react-native-paper';
import { theme } from '../../core/theme';

import styles from './styles';

function Login() {
    return (
        <KeyboardAvoidingView style={styles.backgroundLogin}>
            <View style={styles.container}>
                <Title style={styles.text}> Login </Title>
                <TextInput
                    theme={theme}
                    style={styles.input}
                    label="Email"
                    outlineColor={'#fff'}
                    selectionColor={'#fff'}
                    placeholder='digite o email'
                    placeholderTextColor={"#fff"}
                    
                />
                
                <TextInput
                    theme={theme}
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    selectionColor='#fff'
                    placeholder='digite a senha'
                    placeholderTextColor={"#fff"}
                    
                    right={<TextInput.Icon color={'#fff'} name="eye" />}
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