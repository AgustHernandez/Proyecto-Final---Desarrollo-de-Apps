import './style';

import {
  FlatList,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

import AddItem from './Components/AddItem/AddItem';
import ModalItem  from './Components/Modal/Modal';

export default function App() {  
  const [ counter, setCounter ] = useState(0);
  const [ listItem, setListItem ] = useState([]);
  const [ itemSelected, setItemSelected ] = useState({});
  const [ modalVisible, setModalVisible ] = useState(false);
  
  const onHandlerDelete = id => { 
      setListItem( currenItems => currenItems.filter( item => item.id !== id ));
      setItemSelected({});
      setModalVisible(!modalVisible);
  }
  const onHandlerModal = id => {
    setItemSelected(listItem.filter( item => item.id === id)[0]);
    setModalVisible(!modalVisible);
  }  
  const closeModal = () => {
    setModalVisible(!modalVisible);
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
      <Text 
        style={styles.listItem} 
        onPress={onHandlerModal.bind(this, data.item.id)}>
          {data.item.value}
      </Text>

  return (
    <View style={styles.container}>
      <Text style={styles.tituloApp}> Clima </Text>
      <AddItem onAddItem={agregarItem}/>      
      <View style={styles.listItemContainer}>
        <FlatList
          data={listItem}
          renderItem={renderItem}
          keyExtractor={ item => item.id }
        />
      </View>
      <ModalItem onDelete={onHandlerDelete} item={itemSelected} visible={modalVisible} onCancel={closeModal}/>
    </View>
  );
}

/*const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#00bfff',
    padding: 50,
  },
  addItemContainer: {
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
      width: 200,
      fontSize: 20,
      height: 40,
      borderWidth: 1,
      borderColor: 'white',
      padding: 10,
      borderRadius: 15,
  },
});*/
