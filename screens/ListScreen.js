import {
    Button,
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { useState } from 'react';

import AddItem from '../Components/AddItem/AddItem';
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Header from '../Components/header/Header';

function ListScreen({navigation}) {

    const [ counter, setCounter ] = useState(0);
    const [ listItem, setListItem ] = useState([ ]);

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
            onPress={ () => {
                navigation.navigate('Ciudad')
            }}>
                {data.item.value}
            </Text>
            <FontAwesome.Button name='trash-o' backgroundColor="transparent" onPress={onHandlerDelete.bind(this, data.item.id)} style={styles.buttonTrash} />
        </View>

    return (
        <View style={styles.container}>
            <Header/>
            <AddItem onAddItem={agregarItem}/>
            <View style={styles.listItemContainer}>
                <FlatList
                    data={listItem}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id }/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        flex: 1,  
        alignItems: 'center',
        backgroundColor: 'rgb(100, 210, 255)'
    },
    listItemContainer: {
        width: '100%',
        alignItems: 'center',
        margin: 10,
    },
    listItem: {
        backgroundColor: 'rgb(50, 173, 230)',
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    item: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    buttonTrash: {
        marginRight: 20
    },
});


export default ListScreen;