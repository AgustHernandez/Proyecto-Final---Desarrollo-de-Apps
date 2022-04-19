import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

function CityScreen() {
    return (
        <View style={styles.cityScreen}>
            <View style={styles.cityScreenHeader}>
                <Text style={styles.titleCity}> Nueva York </Text>
            </View>
            <View style={styles.temperatura}>
                <Text style={styles.temperaturaActual}>20°</Text>
                <Text style={styles.detalleTemp}>Mayormente Despejado</Text>
                <Text style={styles.tempMaxMin}>Máx.: 24° Mín.: 15°</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cityScreen: {
        flex: 3, 
        backgroundColor: 'rgb(100, 210, 255)'
    },
    cityScreenHeader: {
        alignItems: 'center',
        marginTop: 25
    },
    titleCity: {
        fontSize: 30,
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


export default CityScreen;





/*import '../style';

import { Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign'

const CityScreen = ({ navigation, props }) => {
    
    return (
        <View style={styles.cityScreen}>
            <View style={styles.cityScreenHeader}>
                <Text style={styles.titleCity}>{props.city}</Text>
                <AntDesign title="Volver" name='back' color='white' onPress={()=> {navigation.navigate('ListScreen')} } style={styles.buttonBack} size={35} />
            </View>
            <View style={styles.temperatura}>
                <Text style={styles.temperaturaActual}>20°</Text>
                <Text style={styles.detalleTemp}>Mayormente Despejado</Text>
                <Text style={styles.tempMaxMin}>Máx.: 24° Mín.: 15°</Text>
            </View>
        </View>
    )
}

export default CityScreen*/

