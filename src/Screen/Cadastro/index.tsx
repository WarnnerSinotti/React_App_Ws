import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Container, ContainerModal, Grid, Row } from '../../components/Global';
import { MyText, Titulo } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyTextInput } from '../../components/TextInput';
import { HelperText, IconButton, TextInput } from 'react-native-paper';
import { Alert, ScrollView } from 'react-native'


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

    const { control, handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            nome: '',
            dataNascimento: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

    });


    return (

        <ContainerModal>
            <IconButton icon='close' color={'red'} size={30} onPress={() => props.navigation.navigate('Index')} />
            <Titulo>Cadastro</Titulo>
            {/* teste */}
            <ScrollView>
                <Controller control={control} render={({ field: { onChange, onBlur, value, } }) => (
                    <Grid>
                        <MyTextInput
                            label="Nome"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.nome}
                            right={errors.nome &&
                                <TextInput.Icon name="menu" color={'red'} />
                            }
                        />
                    </Grid>

                )}
                    name='nome'
                    rules={{
                        required: { value: true, message: "Campo Obrigatório" },
                        minLength: { value: 3, message: "Mínimo de 3 Caracteres" },
                        maxLength: { value: 10, message: "Máximo de 10 Caracteres" },
                    }}
                />
                {errors.nome &&
                    <Grid>
                        <HelperText type='error'>{errors.nome.message}</HelperText>
                    </Grid>
                }

                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label="Data Nascimento"
                            placeholder="00/00/0000"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.dataNascimento}
                            minLength={8}
                            maxLength={8}
                        />
                    </Grid>
                )}
                    name='dataNascimento'
                    rules={{
                        required: { value: false, message: "Campo" },
                        minLength: { value: 8, message: "Mínimo de 8 Caracteres" },
                        maxLength: { value: 8, message: "Máximo de 10 Caracteres" },
                    }}
                />

                {errors.dataNascimento &&
                    <Grid>
                        <HelperText type='error'>{errors.dataNascimento.message}</HelperText>
                    </Grid>
                }
                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label="Email"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            error={errors.email}
                        />
                    </Grid>
                )}
                    name='email'
                    rules={{ required: true }}
                />

                {errors.email &&
                    <Grid>
                        <HelperText type='error'>error</HelperText>
                    </Grid>
                }
                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label="Senha"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={eyedOne}
                            right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualPassword} />}
                            error={errors.password}
                        />
                    </Grid>
                )}
                    name='password'
                    rules={{ required: true, maxLength: 10 }}
                />

                {errors.password &&
                    <Grid>
                        <HelperText type='error'>error</HelperText>
                    </Grid>
                }
                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label={"Confirmar Senha"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            secureTextEntry={eyedTwo}
                            right={<TextInput.Icon name="eye" color={'#fff'} onPress={VisualConfirmPassword} />}
                            error={errors.confirmPassword}
                        />
                    </Grid>
                )}
                    name='confirmPassword'
                    rules={{ required: true, /* maxLength: 10, */ }}
                />

                {errors.confirmPassword &&
                    <Grid>
                        <HelperText type='error'>error</HelperText>
                    </Grid>
                }
            </ScrollView>
            <Row>
                <Grid>
                    <MySubmit icon="login" mode="contained" onPress={handleSubmit(onSubmit)}>Entrar</MySubmit>
                </Grid>
            </Row>

        </ContainerModal>

    )
}
