import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import { tamanho, theme } from '../../core/theme';

export const MyText = (props: any) => {
    return (
        <Text style={styles.text} {...props} />
    )
}

export const TitleLogin = (props: any) => {
    return (
        <Text style={styles.textLogin} {...props} />
    )
}

export const Titulo = (props: any) => {
    return (
        <Text style={styles.titulo} {...props} />
    )
}

export const SubTitulo = (props: any) => {
    return (
        <Text style={styles.subTitulo} {...props} />
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000',
    },
    textLogin: {
        paddingTop: 70,
        paddingVertical: 20,
        color: theme.colors.titulo,
        fontSize: tamanho.login,
        fontWeight: '900',
    },
    titulo: {
        color: theme.colors.titulo,
        fontSize: tamanho.titulo,
        fontWeight: '900',
    },
    subTitulo: {
        color: theme.colors.titulo,
        fontSize: tamanho.subTitulo,
        fontWeight: '900',
    }
})




