import { COLORS } from './../../constants/colors';
import {Platform} from 'react-native';
import React from 'react'
import ScreenInicial from '../../screens/ScreenInicial';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function Inicio() {

    return (
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name='Ciudad actual' component={ScreenInicial} options={{title: 'Ubicación actual'}}/>
        </Stack.Navigator>
    )
}

export default Inicio