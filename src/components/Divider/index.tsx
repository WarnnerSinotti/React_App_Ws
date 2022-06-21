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
        marginTop: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#454138',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    }
})




