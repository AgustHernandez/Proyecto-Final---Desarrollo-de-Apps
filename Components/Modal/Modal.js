import {
    Button,
    Modal,
    StyleSheet,
    Text,
    View
} from 'react-native';

import React from 'react';

function ModalItem(props) {
    const { visible, onDelete, item, onCancel} = props;

    return  (
        <Modal
        transparent={true}
        animationType='slide'
        visible={visible}>
            <View style={styles.modalCentered}>
                <View style={styles.modalView}>
                    <View style={styles.tituloModal}>
                        <Text style={styles.textoTitulo}>Eliminar</Text>
                        <Text style={styles.textoTitulo} onPress={onCancel.bind(this)}>X</Text>
                    </View>
                    <View style={styles.cuerpoModal}>
                        <View>
                            <Text>Desea borrar {item.value}?</Text>
                        </View>
                        <View style={styles.botonModal}>
                            <Text>
                                <Button title='Confirmar' onPress={onDelete.bind(this, item.id)} />
                            </Text>  
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalItem;