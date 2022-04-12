import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create ({
    container: {
        flexDirection: 'column', 
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 100,
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
        backgroundColor: 'rgb(50, 173, 230)',
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20
    },
    buttonTrash: {
        marginRight: 20
    },
    cityScreen: {
        flex: 3, 
    },
    cityScreenHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleCity: {
        fontSize: 30,
        flexGrow: 0,
        flexShrink: 2,
        flexBasis: 300,
    },
    buttonBack: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 50,
    },
    temperatura: {
        
    },
    temperaturaActual: {
        fontSize: 55,
        textAlign: 'center',
        marginTop: 30
    },
    detalleTemp: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    },
    tempMaxMin: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10
    }
})