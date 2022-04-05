import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create ({
    container: {
        flexDirection: 'column', 
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'rgb(100, 210, 255)'
    },
    tituloApp: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 30
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
    listItemContainer: {
        width: '100%', 
        flex: 1,
        alignItems: 'center',
        margin: 10,
    },
    listItem: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'rgb(50, 173, 230)',
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        textAlign: 'center',
        margin: 20
    },
    modalCentered: {
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        borderWidth: 1,
        borderRadius: 20,
        width: 300,
        height: 160,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: "hidden"
    },
    tituloModal: {
        flex:2,
        backgroundColor: '#00B4D8',
        width: '100%',
        color: 'white',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    cuerpoModal: {
        flex:3,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoTitulo: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    botonModal: {
        flex:2,
        margin: 10,
        flexDirection: 'row',
    }
})