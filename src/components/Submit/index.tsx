import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';

export const MySubmit = (props: any) => {
    return (
        <Button style={styles.input} mode="contained" {...props} />
       
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




