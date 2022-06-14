import React from 'react';

import { Image, View } from 'react-native';
import styles from './styles';
import Logo from '../../../assets/key.gif';
import { Text } from 'react-native-paper';

function Header() {
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image} 
            source={Logo}
            />
        </View>
    )
}

export default Header;