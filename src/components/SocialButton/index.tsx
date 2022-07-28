import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

import { theme } from '../../styles/theme';

export const SocialButton = (props: any) => {
    return (

        <IconButton style={styles.button} theme={theme} mode="contained" {...props}/>
       
    )
}

const styles = StyleSheet.create({
    button: {
        width: 50,
        color: theme.colors.iconButtonColor,
        backgroundColor: theme.colors.titulo,
    }
})




