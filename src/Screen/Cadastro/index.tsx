import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Container, ContainerModal, Grid, Row } from '../../components/Global';
import { Titulo } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyTextInput } from '../../components/TextInput';
import { TextInput } from 'react-native-paper';


export default function Cadastro(props: any) {

    const [nome, setNome] = React.useState("");
    const [dataNascimento, setDataNascimento] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [eyedOne, setEyedOne] = React.useState(true);
    const [eyedTwo, setEyedTwo] = React.useState(true);

    const VisualPassword = () => {
        setEyedOne(current => !current)
    }

    const VisualConfirmPassword = () => {
        setEyedTwo(current => !current)
    }

    const onSubmit = data => {
        props.navigation.navigate('Index')
        console.log(data);
      };

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            nome: '',
            dataNascimento: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    });

    return (
        <Container>
            <Row>
                <ContainerModal>
                    <Row>
                        <Titulo>Cadastro</Titulo>
                    </Row>
                    <ContainerModal>
                        <Row>
                            <Controller control={control} render={({ field: { onChange, onBlur, name } }) => (
                                <MyTextInput 
                                    label="Nome"
                                    value={name}
                                    onChangeText={name => onChange(name)}
                                
                                    nome={name}
                                    />
                            )}
                                name='nome'
                                rules={{ required: true }}
                            />
                        </Row>
                        <Row>
                            <MyTextInput label="Data Nascimento" value={dataNascimento} onChangeText={dataNascimento => setDataNascimento(dataNascimento)} />
                        </Row>
                        <Row>
                            <MyTextInput label="Email" value={email} onChangeText={Email => setEmail(Email)} />
                        </Row>
                        <Row>
                            <MyTextInput label="Senha"
                                value={password}
                                secureTextEntry={eyedOne}
                                right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualPassword} />}
                                onChangeText={Password => setPassword(Password)} />
                        </Row>
                        <Row>
                            <MyTextInput label="Confirmar Senha"
                                value={confirmPassword}
                                secureTextEntry={eyedTwo}
                                right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualConfirmPassword} />}
                                onChangeText={confirmPassword => setConfirmPassword(confirmPassword)} />
                        </Row>

                    </ContainerModal>
                    <Row>
                        <Grid>
                            <MySubmit icon="login" mode="contained" onPress={handleSubmit(onSubmit)}>Entrar</MySubmit>
                        </Grid>
                    </Row>
                </ContainerModal>
            </Row>


        </Container>
    )
}
