import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

export const MyTextInput = (props: any) => {
    return (
        <TextInput style={styles.input} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        margin: '1%',
        color: '#fff',
        backgroundColor: '#454138',
    }
})




