import * as React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Title, TextInput, Button } from 'react-native-paper';
import { themeInput } from '../../core/theme';

import styles from './styles';

const Acesso = async (Email: any, Password: any) => {

    if(Email == 1 && Password == 1){
        console.log("logado - Adicionar Navigate")
    } else {
        console.log('adicionar alerta')
    }
}

function Login() {

    const [Email, setEmail] = React.useState("");
    const [Password, setPassword] = React.useState("");
    const [Eyed, setEyed] = React.useState(true);

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
                    value={Email}
                    onChangeText={Email => setEmail(Email)}
                />

                <TextInput
                    theme={themeInput}
                    style={styles.input}
                    label="Password"
                    secureTextEntry={Eyed}
                    selectionColor='#fff'
                    right={<TextInput.Icon color={'#fff'} name="eye" onPress={VisualPassword} />}
                    value={Password}
                    onChangeText={Password => setPassword(Password)}
                />
                <Button
                    style={styles.submit}
                    icon="login" mode="contained" onPress={() => Acesso(Email, Password)}>
                    Login
                </Button>

            </View>
        </KeyboardAvoidingView>

    )
}




export default Login;