import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, style } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style ={ style.globalMargin}>
        <Text style={style.title}> Iconos</Text>
        <Text>
        <Icon name="airplane-outline" size={30} color={ colores.primary} />
        </Text>
     
    </View>
  )
}
