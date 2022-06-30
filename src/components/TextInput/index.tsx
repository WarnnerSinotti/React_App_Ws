import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import React from 'react';

import { theme } from '../../core/theme';

export const MyTextInput = (props: any) => {
    return (
        <TextInput style={styles.input} theme={theme} {...props} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        margin: '1%',
        color: theme.colors.colorText,
        backgroundColor: theme.colors.backdrop,
        top: 2,
    }
})




