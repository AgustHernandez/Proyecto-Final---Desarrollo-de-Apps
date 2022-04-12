import './style';

import React, {useState} from 'react';

import CityScreen from './screens/CityScreen';
import InitialScreen from './screens/InitialScreen';
import {View} from 'react-native';

export default function App() {  
  const [city, setCity] = useState('')

  const handlerCity = value => {
    setCity (value)
  }

  const back  = () => {
    setCity ('')
  }

  let content = <InitialScreen onSelectCity={handlerCity} />
  if (city !== '') {
    content= <CityScreen city={city} onBack={back}  />
  }


  return (
    <View style={styles.container}>
      {content}
    </View>
  );
}
