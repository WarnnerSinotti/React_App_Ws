import * as React from 'react';
import { Modal, Portal, Provider, TextInput } from 'react-native-paper';
import { MyDivider } from '../../components/Divider';
import { Container, ContainerModal, Grid, Row, RowRight } from '../../components/Global';
import { Logo } from '../../components/Image';
import { MySubmit } from '../../components/Submit';
import { MyText, SubTitulo, TitleLogin, Titulo } from '../../components/Text';
import { MyTextInput } from '../../components/TextInput';
import { useNavigation } from '@react-navigation/native';
import { SocialButton } from '../../components/SocialButton';
import { Alert } from 'react-native';

const Acesso = async (email: any, password: any, navigation: any, setEmail, setPassword) => {

    if (email == 1 && password == 1) {

        navigation.navigate('Menu');
        
        console.log("Acessou Menu")
    } else {
        Alert.alert('Usuário ou Senha Inválido');
    }
    setEmail('');
    setPassword('')
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

    const RecuperarSenha = () => {
        Alert.alert('Enviado Recuperação de Senha em Seu E-mail');
        console.log('Validar email antes de fechar')
        hideModal()
        setEmailForget('')
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    return (
        <Container>
            <TitleLogin > My Pet App </TitleLogin>
            <Row>
                <MyTextInput label="Email" value={email} onChangeText={Email => setEmail(Email)} />
            </Row>
            <Row>
                <MyTextInput label="Senha"
                    value={password}
                    secureTextEntry={eyed}
                    right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualPassword} />}
                    onChangeText={Password => setPassword(Password)} />
            </Row>
            <Row>
                <MySubmit icon="login" mode="contained" onPress={() => Acesso(email, password, navigation, setEmail,setPassword)}>Entrar</MySubmit>
            </Row>
            <Row>
                <RowRight>
                    <MyText onPress={showModal}>Esqueceu Senha?</MyText>
                </RowRight>
            </Row>
            <Row style={{padding: 20}}>
                <Grid>
                    <SubTitulo >Acesse com seu favorito login social</SubTitulo>
                </Grid>
            </Row>
            <Row>
                <Grid>
                    <SocialButton icon="google" onPress={() => console.log('google')}>Google</SocialButton>
                </Grid>
                <Grid>
                    <SocialButton icon="facebook" onPress={() => console.log('facebook')}>Facebbok</SocialButton>
                </Grid>
            </Row>
            <Row >
                <Grid>
                <MyDivider />
                </Grid>
                <Grid>
                <MyText>OU</MyText>
                </Grid>
                <Grid>
                <MyDivider />
                </Grid>
                
            </Row>

            <Row>
                <MySubmit icon="star" onPress={() => props.navigation.navigate('Cadastro')}>Cadastre-se</MySubmit>
            </Row>

            <Row style={{padding: 14}} >
                <Logo source={require('../../../assets/pet.gif')} />
            </Row>




            {/*MODAL DENTRO DE ESQUECEU SENHA*/}
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <ContainerModal>
                            <Row>
                                <Titulo>Recuperação de Senha</Titulo>
                            </Row>
                            <Row>
                                <MyTextInput label="Email" value={emailForget} onChangeText={emailForget => setEmailForget(emailForget)} />
                            </Row>
                            <Row>
                                <Grid>
                                    <MySubmit icon="send" onPress={() => RecuperarSenha()}>Enviar</MySubmit>
                                </Grid>
                            </Row>
                        </ContainerModal>
                    </Modal>
                </Portal>
            </Provider>
        </Container>

    )
}
