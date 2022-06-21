import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

import { themeInput } from '../../core/theme';

export const MyTextInput = (props: any) => {
    return (
        <TextInput style={styles.input} theme={themeInput} {...props} />
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




