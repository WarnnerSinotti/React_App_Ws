import * as yup from 'yup';

export const schema = yup.object({
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