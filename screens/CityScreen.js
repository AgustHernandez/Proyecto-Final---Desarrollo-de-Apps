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
            <View>
                <Text style={styles.temperatura}>20°</Text>
                <Text style={styles.temperatura}>Mayormente Despejado</Text>
            </View>
        </View>
    )
}

export default CityScreen

