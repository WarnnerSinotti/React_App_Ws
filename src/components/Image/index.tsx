import React from 'react';
import { StyleSheet, Image } from 'react-native';


export const Logo = (props: any) => {
    return (
        <Image style={styles.logo} {...props} />
    )
}

const styles = StyleSheet.create({
    logo: {
        padding: 80,
        width: 100,
        height: 100,
    },
})


