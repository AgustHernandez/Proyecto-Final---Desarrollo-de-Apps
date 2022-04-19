import { StyleSheet, Text, View } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react';

function ScreenInicial({navigation}) {



    return (
        <View style={styles.container}>
            <View style={styles.cityScreen}>
                <View style={styles.cityScreenHeader}>
                    <Text style={styles.titleCity}> Buenos Aires </Text>
                    <Ionicons title="Menu" name='ios-menu-outline' color='white' onPress={()=> {navigation.navigate('Ciudades guardadas')} } style={styles.buttonBack} size={35} />
                </View>
                <View style={styles.temperatura}>
                    <Text style={styles.temperaturaActual}>20°</Text>
                    <Text style={styles.detalleTemp}>Mayormente Despejado</Text>
                    <Text style={styles.tempMaxMin}>Máx.: 24° Mín.: 15°</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column', 
        flex:1, 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: 'rgb(100, 210, 255)'
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
});


export default ScreenInicial;