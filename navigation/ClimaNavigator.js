import CityScreen from '../screens/CityScreen';
import ListScreen from '../screens/ListScreen';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ScreenInicial from '../screens/ScreenInicial';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ClimaNavigator =  () => {

    return  (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Ciudad actual'>
            <Stack.Screen name='Ciudad actual' component={ScreenInicial}/>
            <Stack.Screen name='Ciudades guardadas' component={ListScreen}>
            </Stack.Screen>
            <Stack.Screen name='Ciudad' component={CityScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default ClimaNavigator;


/*import '../style';

import CityScreen from '../screens/CityScreen'
import ListScreen from '../screens/ListScreen'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import ScreenInicial from '../screens/ScreenInicial'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenInicial from './../screens/ScreenInicial';
import ListScreen from './../screens/ListScreen';

const Stack = createNativeStackNavigator()

const ClimaNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Inicio'>
                <Stack.Screen name="Inicio" component={ScreenInicial} />
                <Stack.Screen name="ListCities" component={ListScreen} />
                <Stack.Screen name="City" component={CityScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ClimaNavigator*/