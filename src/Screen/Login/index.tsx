import * as React from 'react';
import { Modal, Portal, Text, Provider, Title, TextInput, Divider } from 'react-native-paper';
import { MyDivider } from '../../components/Divider';
import { Container, DividerPixel, DividerPixelText, GridOne, GridTree, GridTwo, RowContainer } from '../../components/Global';
import { Logo } from '../../components/Image';
import { MySubmit } from '../../components/Submit';
import { MyText } from '../../components/Text';
import { MyTextInput } from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';

const Acesso = async (email: any, password: any, navigation: any) => {

    if (email == 1 && password == 1) {

        navigation.navigate('Menu');

        console.log("Acessou Menu")
    } else {
        console.log('adicionar alerta')
    }
}

export default function Index(props: any) {

    const [email, setEmail] = React.useState("");
    const [emailForget, setEmailForget] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [eyed, setEyed] = React.useState(true);
    const navigation = useNavigation();
    const [visible, setVisible] = React.useState(false);

    const VisualPassword = () => {
        setEyed(current => !current)
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Container>
            <Title > Login </Title>
            <RowContainer>
                <MyTextInput label="Email" value={email} onChangeText={Email => setEmail(Email)} />
            </RowContainer>
            <RowContainer>
                <MyTextInput label="Senha"
                    value={password}
                    secureTextEntry={eyed}
                    right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualPassword} />}
                    onChangeText={Password => setPassword(Password)} />
            </RowContainer>
            <RowContainer>
                <MySubmit icon="login" mode="contained" onPress={() => Acesso(email, password, navigation)}>Entrar</MySubmit>
            </RowContainer>
            <RowContainer >
                <MyText onPress={showModal}>Esqueceu Senha?</MyText>
            </RowContainer>
            <RowContainer>
                <GridTwo>
                    <MySubmit icon="google" onPress={() => console.log('google')}>Google</MySubmit>
                </GridTwo>
                <GridTwo>
                    <MySubmit icon="facebook" onPress={() => console.log('facebook')}>Facebbok</MySubmit>
                </GridTwo>
            </RowContainer>
            <RowContainer>
                <DividerPixel>
                    <MyDivider />
                </DividerPixel>
                <DividerPixelText>
                <MyText>OU</MyText>
                </DividerPixelText>
                <DividerPixel>
                    <MyDivider />
                </DividerPixel>
            </RowContainer>
            <RowContainer >
                <GridOne>
                <MyText >Acesse com seu favorito login social</MyText>
                </GridOne>
            </RowContainer>
            <RowContainer>
                <MySubmit icon="star" onPress={() => props.navigation.navigate('Cadastro')}>Cadastre-se</MySubmit>
            </RowContainer>

            <RowContainer style={{ justifyContent: 'center' }}>
                <Logo source={require('../../../assets/pet.gif')} />
            </RowContainer>



            {/*MODAL DENTRO DE ESQUECEU SENHA*/}
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>RECUPERACAO DE SENHA</Text>
                        <RowContainer>
                            <MyTextInput label="Email" value={emailForget} onChangeText={emailForget => setEmailForget(emailForget)} />
                        </RowContainer>
                        <GridTwo>
                            <MySubmit icon="send" onPress={() => console.log('Enviar')}>Enviar</MySubmit>
                        </GridTwo>
                    </Modal>
                </Portal>
            </Provider>
        </Container>

    )
}
