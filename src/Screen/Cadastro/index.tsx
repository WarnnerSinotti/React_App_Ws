import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Container, ContainerModal, Grid, Row } from '../../components/Global';
import { MyText, Titulo } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyTextInput } from '../../components/TextInput';
import { Text, TextInput } from 'react-native-paper';


export default function Cadastro(props: any) {

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
                            <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                <MyTextInput
                                    label="Nome"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />  
                                
                            )}
                                name='nome'
                                rules={{ required: true}}
                            />
                        </Row>
                        <Text error='error'>{errors.email && "First name is required"}</Text>
                        <Row>
                            <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                <MyTextInput
                                    label="Data Nascimento"
                                    placeholder="00/00/0000"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                                name='dataNascimento'
                                rules={{ required: true }}
                            />
                        </Row>
                        <Row>
                            <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                <MyTextInput
                                    label="Email"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                                name='email'
                                rules={{ required: true }}
                            />
                        </Row>
                        <Row>
                            <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                <MyTextInput
                                    label="Senha"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    secureTextEntry={eyedOne}
                                    right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualPassword} />}
                                />
                            )}
                                name='password'
                                rules={{ required: true, /* maxLength: 10, */ }}
                            />
                        </Row>
                        <Row>
                            <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                                <MyTextInput
                                    label="Confirmar Senha"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    secureTextEntry={eyedTwo}
                                    right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualConfirmPassword} />}
                                />
                            )}
                                name='confirmPassword'
                                rules={{ required: true, /* maxLength: 10, */ }}
                            />
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
