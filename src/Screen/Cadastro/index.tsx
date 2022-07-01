import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ContainerModal, Grid, Row } from '../../components/Global';
import { Titulo } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyTextInput } from '../../components/TextInput';
import { HelperText, IconButton, TextInput } from 'react-native-paper';
import { ScrollView } from 'react-native'
import { theme } from '../../core/theme';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';



export default function Cadastro(props: any) {


    const onSubmit = data => {
        props.navigation.navigate('Index')

        console.log(data);

    };

    const schema = yup.object({
        nome: yup
            .string()
            .required('Não pode conter campo campo')
            .min(3, 'Nome não deve conter menos de 3 caracteres'),
        email: yup
            .string()
            .required('Não pode conter campo campo')
            .email('Digite um e-mail válido'),
        password: yup
            .string()
            .required('Não pode conter campo campo')
            .min(6, 'Senha deve conter pelo menos 6 Caracteres'),
        confirmPassword: yup
            .string()
            .required('Não pode conter campo campo')
            .min(6, 'Senha deve conter pelo menos 6 Caracteres')
            .oneOf([yup.ref('password'), null], 'Senhas não conferem')

    })

    const { control, handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)

    });

    return (

        <ContainerModal>
            <Row>
                <Grid>
                    <Titulo>Cadastro</Titulo>
                </Grid>
                <Grid>
                    <IconButton icon='close' color={'red'} size={30} onPress={() => props.navigation.navigate('Index')} />
                </Grid>
            </Row>
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
                            maxLength={40}
                            right={errors.nome &&
                                <TextInput.Icon name="alert-circle-outline" color={theme.colors.iconButtonColor} />
                            }
                        />
                    </Grid>

                )}
                    name='nome'
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
                            keyboardType='numeric'
                            placeholder="00/00/0000"
                            mode='date'
                            format="DD-MM-YYYY"
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
                        minLength: { value: 8, message: "Data de Nascimento" },
                        maxLength: { value: 8, message: "Data de Nascimento 13" },
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
                            right={errors.email &&
                                <TextInput.Icon name="alert-circle-outline" color={theme.colors.iconButtonColor} />
                            }
                        />
                    </Grid>
                )}
                    name='email'
                    rules={{
                        required: { value: true, message: "Campo Obrigatório" },
                        maxLength: { value: 20, message: "Máximo de 20 Caracteres" },
                    }}
                />

                {errors.email &&
                    <Grid>
                        <HelperText type='error'>{errors.email.message}</HelperText>
                    </Grid>
                }
                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label="Senha"
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            maxLength={15}
                            error={errors.password}
                            right={errors.password &&
                                <TextInput.Icon name="alert-circle-outline" color={theme.colors.iconButtonColor} />
                            }
                        />
                    </Grid>
                )}
                    name='password'
                    rules={{
                        required: { value: true, message: "Campo Obrigatório" },
                        minLength: { value: 6, message: "Mínimo de 6 Caracteres" },
                        maxLength: { value: 15, message: "Máximo de 15 Caracteres" },
                    }}
                />

                {errors.password &&
                    <Grid>
                        <HelperText type='error'>{errors.password.message}</HelperText>
                    </Grid>
                }
                <Controller control={control} render={({ field: { onChange, onBlur, value } }) => (
                    <Grid>
                        <MyTextInput
                            label={"Confirmar Senha"}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            maxLength={15}
                            error={errors.confirmPassword}
                            right={errors.confirmPassword &&
                                <TextInput.Icon name="alert-circle-outline" color={theme.colors.iconButtonColor} />
                            }
                        />
                    </Grid>
                )}
                    name='confirmPassword'
                    rules={{
                        required: { value: true, message: "Campo Obrigatório" },
                        minLength: { value: 6, message: "Mínimo de 6 Caracteres" },
                        maxLength: { value: 15, message: "Máximo de 15 Caracteres" },
                    }}
                />

                {errors.confirmPassword &&
                    <Grid>
                        <HelperText type='error'>{errors.confirmPassword.message}</HelperText>
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
