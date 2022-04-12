import '../style';

import {
    FlatList,
    Text,
    View,
} from 'react-native';
import React, { useState } from 'react';

import AddItem from '../Components/AddItem/AddItem';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Header from '../Components/header/Header';

const InitialScreen = props => {
    const [ counter, setCounter ] = useState(0);
    const [ listItem, setListItem ] = useState([]);

    const onHandlerDelete = id => { 
        setListItem( currenItems => currenItems.filter( item => item.id !== id ));
    }

    const agregarItem = (textItem) => {   
        if(textItem!=="") {
            setListItem( currenItems => 
                [...currenItems, {id: counter, value: textItem}]        
            )
            setCounter(counter + 1);
        }
    }

    const renderItem = data => 
        <View style={styles.listItem}>
            <Text style={styles.item}
            onPress={() => props.onSelectCity(data.item.value)} >
                {data.item.value}
            </Text>
            <FontAwesome.Button name='trash-o' backgroundColor="transparent" onPress={onHandlerDelete.bind(this, data.item.id)} style={styles.buttonTrash} />
        </View>

    return (
        <View>
            <Header/>
            <AddItem onAddItem={agregarItem}/>      
            <View style={styles.listItemContainer}>
                <FlatList
                    data={listItem}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id }/>
            </View>
        </View>
    )
}

export default InitialScreen