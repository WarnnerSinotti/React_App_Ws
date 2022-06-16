import * as React from 'react';
import { KeyboardAvoidingView, View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';




export default function Header() {

    return (
        <KeyboardAvoidingView >
            <View style={styles.container}>
                <Text style={styles.text}>Menu</Text>
                
            </View>
        </KeyboardAvoidingView>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    text: {
        flex: 1,
        paddingTop: 40,
        minHeight: 100,
        maxHeight: 100,
        fontSize: 60,
        fontStyle: 'italic',
        alignItems: 'center',
        color: '#ec8337',

    },
    backgroundLogin: {
        flex: 1,
        minHeight: 400,
    },
    input: {
        width: 300,
        margin: 5,
        color: '#fff',
        placeholderTextColor: '#fff',
        backgroundColor: '#454138',
    },
    submit: {
        width: 300,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
    },
    image: {
        width: 400,
        height: 300
    },

});

