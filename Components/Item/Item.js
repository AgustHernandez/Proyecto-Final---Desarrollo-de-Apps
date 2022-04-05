import { Button, Text, View } from 'react-native';

import React from 'react'

function Item({city}) {
    return (
        <View>
            <Text> {city.name} </Text>
            <Button title='Eliminar' />
        </View>
    )
}

export default Item