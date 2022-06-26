import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import React from 'react';

export const MyDivider = (props: any) => {
    return (

        <Divider style={styles.divider} {...props} />

    )
}

const styles = StyleSheet.create({
    divider: {
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: '#454138',

    }
})




