import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',

    },
    text: {
        flex: 1,
        minHeight: 100,
        maxHeight: 100,
        paddingTop: 40,
        fontSize: 60,
        fontStyle: 'italic',
        alignItems: 'center',
        color: '#4180fc',

    },
    backgroundLogin: {
        flex: 1,
        minHeight: 1000,
        backgroundColor: '#caeef9',
    },
    input: {
        width: 300,
        margin: 5,
        backgroundColor: '#6bcebb',

    },
    submit: {
        width: 300,
        maxHeight: 100,
        margin: 5,

        backgroundColor: '#4180fc',


    }

});