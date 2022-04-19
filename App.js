/*import './style';

import React, {useState} from 'react';

import ClimaNavigator from './navigation/ClimaNavigator';
import {View} from 'react-native';*/

/*import CityScreen from './screens/CityScreen';
import InitialScreen from './screens/InitialScreen';*/

import AppLoading from 'expo-app-loading';
import ClimaNavigator from './navigation/ClimaNavigator';
import { useFonts } from 'expo-font';

export default function App() { 

  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
    OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!loaded) return <AppLoading/>


  return (
    <ClimaNavigator/>
  )};
