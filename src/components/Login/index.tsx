import * as React from 'react';
import { KeyboardAvoidingView, View, Image, StyleSheet, Alert} from 'react-native';
import { Title, TextInput, Button, IconButton, Text, Switch, Divider, Modal } from 'react-native-paper';
import { themeInput } from '../../core/theme';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../../assets/pet.gif';


const Acesso = async (email: any, password: any, navigation: any) => {

    if (email == 1 && password == 1) {

        navigation.navigate('Menu');

        console.log("Acessou Menu")
    } else {
        console.log('adicionar alerta')
    }
}

export default function Login() {


    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [eyed, setEyed] = React.useState(true);
    const navigation = useNavigation();

    const VisualPassword = () => {
        setEyed(current => !current)
    }

    return (
        <KeyboardAvoidingView style={styles.backgroundLogin}>
            <View style={styles.container}>
                <Title style={styles.text}> Login </Title>
                <TextInput
                    theme={themeInput}
                    style={styles.input}
                    label="Email"
                    selectionColor={'#fff'}
                    value={email}
                    onChangeText={Email => setEmail(Email)}
                />

                <TextInput
                    theme={themeInput}
                    style={styles.input}
                    label="Password"
                    secureTextEntry={eyed}
                    selectionColor='#fff'
                    right={<TextInput.Icon color={'#fff'} name="eye" onPress={VisualPassword} />}
                    value={password}
                    onChangeText={Password => setPassword(Password)}
                />
                <Button
                    style={styles.submit}
                    icon="login" mode="contained" onPress={() => Acesso(email, password, navigation)}>
                    Login
                </Button>
                <Divider />
                
                <View style={styles.submit}>
                <Button
                    style={styles.cadastro}
                    icon="menu" mode="contained" onPress={() => console.log('Cadastre')}>
                    Cadastre-se
                </Button>
                <Text>Esqueceu Senha - Adicionar Modal</Text>
                
                </View>

                <Image
                    style={styles.image}
                    source={Logo}
                />


            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    text: {
        flex: 1,
        paddingTop: 40,
        minHeight: 100,
        maxHeight: 100,
        fontSize: 60,
        fontStyle: 'italic',
        alignItems: 'center',
        color: '#ec8337',

    },
    backgroundLogin: {
        flex: 1,
        minHeight: 400,
    },
    input: {
        width: 300,
        margin: 5,
        color: '#fff',
        placeholderTextColor: '#fff',
        backgroundColor: '#454138',
    },
    submit: {
        width: 300,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
    },
    image: {
        width: 400,
        height: 300
    },
    cadastro: {
        width: 150,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#999',
    },

});

