import * as React from 'react';
import { KeyboardAvoidingView, View, Image, StyleSheet, Alert } from 'react-native';
import { Title, TextInput, Button, Text, Provider, Modal, Portal, Divider } from 'react-native-paper';
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
    const [emailForget, setEmailForget] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [eyed, setEyed] = React.useState(true);
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, };

    const VisualPassword = () => {
        setEyed(current => !current)
    }

    return (
        <KeyboardAvoidingView style={styles.backgroundLogin}>
            <View style={styles.container}>
                <View>
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
                    <View style={{ flexDirection: 'row', paddingTop: 15, alignSelf: 'flex-end' }}>
                        <Text styles={styles.forget} onPress={showModal}>Esqueceu Senha</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Button
                            style={styles.loginExterno}
                            icon="google" mode="contained" onPress={() => console.log('Integrar Google')}>
                            GOOGLE
                        </Button>
                        <Button
                            style={styles.loginExterno}
                            icon="facebook" mode="contained" onPress={() => console.log('Integrar Facebook')}>
                            FACEBOOK
                        </Button>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Divider style={styles.divider} />
                        <Text>  Ou  </Text>
                        <Divider style={styles.divider} />
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                        <Button
                            style={styles.cadastro}
                            icon="menu" mode="contained" onPress={() => console.log('Cadastro')}>
                            Cadastre-se
                        </Button>
                    </View>
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={Logo}
                    />
                </View>
            </View>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Esqueceu sua senha, não se preocupe, só digitar seu e-mail e enviar!</Text>
                        <TextInput
                            theme={themeInput}
                            style={styles.input}
                            label="Email"
                            selectionColor={'#fff'}
                            value={emailForget}
                            onChangeText={EmailForget => setEmailForget(EmailForget)}
                        />
                        <Button
                            style={styles.submit}
                            icon="send" mode="contained" onPress={() => console.log('Disparar Email')}>
                            Enviar
                        </Button>
                    </Modal>
                </Portal>
            </Provider>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    container1: {
        paddingLeft: 40,
        paddingEnd: 40,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    container2: {
        flexDirection: "row",
        alignSelf: 'flex-end',
    },
    text: {
        flex: 1,
        paddingTop: 40,
        minHeight: 100,
        maxHeight: 100,
        fontSize: 60,
        fontStyle: 'italic',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
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
        backgroundColor: '#454138',
    },
    submit: {
        width: 300,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
    },
    image: {
        paddingTop: 50,
        width: 200,
        height: 200
    },
    cadastro: {
        width: 150,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
        alignItems: "center",
        alignContent: 'flex-end',
    },
    loginExterno: {
        width: 150,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#051728',
        alignItems: "center",
        alignContent: 'flex-end',
    },
    divider: {
        padding: 1, //Tirar depois
        width: 100,
        borderWidth: 1,
        borderRadius: 15,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#454138',
    },
    forget: {
        alignSelf: 'flex-end'

    },

});

