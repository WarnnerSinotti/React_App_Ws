import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Index  from '../Pages/Login/index'
import Menu from '../Pages/Menu';

const Stack = createStackNavigator();

export default function Routes(){

  return (
  
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Index'>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  </NavigationContainer>
   
  )
}