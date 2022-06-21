import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react';

export const MyText = (props: any) => {
    return (
        <Text style={styles.text} {...props} />
    )
}

const styles = StyleSheet.create({
    text: {
        width: '100%',
        margin: '1%',
        color: '#000',
    }
})




