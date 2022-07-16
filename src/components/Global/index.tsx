import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../core/theme';

export const Container = (props: any) => {
    return (
        <View style={styles.container} {...props} />
    )
}

export const Row = (props: any) => {
    return (
        <View style={styles.row} {...props} />
    )
}

export const RowRight = (props: any) => {
    return (
        <View style={styles.rowRight} {...props} />
    )
}

export const Grid = (props: any) => {
    return (
        <View style={styles.grid} {...props} />
    )
}

export const DividerText = (props: any) => {
    return (
        <View style={styles.dividerText} {...props} />
    )
}

export const DividerPixel = (props: any) => {
    return (
        <View style={styles.dividerPixel} {...props} />
    )
}
export const ContainerModal = (props: any) => {
    return (
        <View style={styles.containerModal} {...props} />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    row: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        //backgroundColor: "red",
        justifyContent: 'center'
    },
    rowRight: {
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    containerModal: {
        paddingHorizontal: 10,
        padding: 50,
        backgroundColor: theme.colors.modal,
        borderColor: '#999',
        borderRadius: 15,
    },
    grid: {
        padding: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    dividerText: {
        width: 12,
        paddingHorizontal: 10,
    },
    dividerPixel: {

        paddingHorizontal: 10,
    }
})

