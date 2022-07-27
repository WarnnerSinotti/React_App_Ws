import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';
import { theme } from '../../styles/theme';

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
        fontSize: theme.fontSizes.lg,
        fontWeight: '900',
    },
    titulo: {
        color: theme.colors.titulo,
        fontSize: theme.fontSizes.md,
        fontWeight: '900',
        
    },
    subTitulo: {
        color: theme.colors.titulo,
        fontSize: theme.fontSizes.sm,
        fontWeight: '900',
    }
})




