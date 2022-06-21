import { StyleSheet, View } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import React from 'react';

export const MyDivider = (props: any) => {
    return (
        <View>
            <Divider style={styles.divider} {...props} />
            <Text>  Ou  </Text>
            <Divider style={styles.divider} {...props} />
        </View>
    )
}

const styles = StyleSheet.create({
    divider: {
        marginTop: 10,
        width: '100%',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#454138',
    }
})




