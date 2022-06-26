import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import { theme } from '../../core/theme';

export const SocialButton = (props: any) => {
    return (
        <Button style={styles.button} mode="contained" {...props} />
       
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        margin: '1%',
        backgroundColor: theme.colors.buttonSocial,
    }
})




