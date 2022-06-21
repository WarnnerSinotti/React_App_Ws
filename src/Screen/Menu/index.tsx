import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../../components/Header'


export default function Menu(props: any) {
    return (
        <View>
            <Header />
            <Button
                style={styles.loginExterno}
                mode="contained" onPress={() => props.navigation.goBack()}>
                Voltar Test
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    container1: {
        paddingLeft: 40,
        paddingEnd: 40,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    container2: {
        flexDirection: "row",
        alignSelf: 'flex-end',
    },
    text: {
        flex: 1,
        paddingTop: 40,
        minHeight: 100,
        maxHeight: 100,
        fontSize: 60,
        fontStyle: 'italic',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
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
        backgroundColor: '#454138',
    },
    submit: {
        width: 300,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
    },
    image: {
        paddingTop: 50,
        width: 200,
        height: 200
    },
    cadastro: {
        width: 150,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#ec8337',
        alignItems: "center",
        alignContent: 'flex-end',
    },
    loginExterno: {
        width: 150,
        maxHeight: 100,
        margin: 5,
        backgroundColor: '#051728',
        alignItems: "center",
        alignContent: 'flex-end',
    },
    divider: {
        padding: 1, //Tirar depois
        width: 100,
        borderWidth: 1,
        borderRadius: 15,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#454138',
    },
    forget: {
        alignSelf: 'flex-end'

    },

});

