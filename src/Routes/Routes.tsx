import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Index from '../Screen/Login/index'
import Menu from '../Screen/Menu';
import Cadastro from '../Screen/Cadastro';
import Home from '../Screen/Home';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        
      </Stack.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </NavigationContainer>

  )
}