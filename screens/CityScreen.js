import '../style';

import { Text, View } from 'react-native';

import AntDesign from '@expo/vector-icons/AntDesign'

const CityScreen = props => {
    
    return (
        <View style={styles.cityScreen}>
            <View style={styles.cityScreenHeader}>
                <Text style={styles.titleCity}>{props.city}</Text>
                <AntDesign title="Volver" name='back' color='white' onPress={()=> props.onBack()} style={styles.buttonBack} size={35} />
            </View>
            <View style={styles.temperatura}>
                <Text style={styles.temperaturaActual}>20°</Text>
                <Text style={styles.detalleTemp}>Mayormente Despejado</Text>
                <Text style={styles.tempMaxMin}>Máx.: 24° Mín.: 15°</Text>
            </View>
        </View>
    )
}

export default CityScreen

