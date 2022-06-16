import * as React from 'react';
import { View, Button } from 'react-native';
import Header from '../../components/Header'
import MyComponent from '../../components/Modal';


export default function Menu(props: any) {
    return (
        <View>
            <Header/>
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    )
}
