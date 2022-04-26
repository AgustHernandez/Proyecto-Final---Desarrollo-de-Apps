import Inicio from './../inicio/Inicio';
import Listado from './../listado/Listado';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName='Actual' 
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#1976D2' }}
        >
            <Tab.Screen name='Ubicacion Actual' component={Inicio}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="map-marker-outline" color={color} size={26} />
                    ),

                }}
            />
            <Tab.Screen name='Ciudades' component={Listado}
                options={{
                    tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="menu" color={color} size={26} />
                    ),
                    
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator