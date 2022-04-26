import { COLORS } from './../../constants/colors';
import CityScreen from '../../screens/CityScreen';
import ListScreen from '../../screens/ListScreen';
import {Platform} from 'react-native';
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

function Listado() {
  return (
    <Stack.Navigator initialRouteName='ciudades'>
      <Stack.Screen name='Ciudades' component={ListScreen} options={ ({route}) => ({title: route.name})}/>
      <Stack.Screen name='Ciudad' component={CityScreen} options={ ({route}) => ({title: ''})}/>
    </Stack.Navigator>
  )
}

export default Listado