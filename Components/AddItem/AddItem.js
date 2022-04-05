import '../../style';

import { Button, TextInput, View } from 'react-native';
import React, { useState } from 'react'

function AddItem(props) {      
    const [ textItem, setTextItem ] = useState('');  
    const { onAddItem } = props;
    const onHandlerChangeItem = (texto) => setTextItem(texto);

    const onHandlerAddItem = () => {
        setTextItem('');
        onAddItem(textItem);
    }

    return (
        <View style={styles.addItemContainer}>
            <TextInput 
                placeholder='Ingrese un item' 
                style={styles.input}
                value={textItem}
                onChangeText={onHandlerChangeItem}
                autoCapitalize='words'
                />
            <Button title="Agregar" color='#173753' onPress={onHandlerAddItem}/>
        </View>
    )
}

export default AddItem