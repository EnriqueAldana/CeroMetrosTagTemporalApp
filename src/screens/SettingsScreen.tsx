import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../context/authContext/AuthContext';
import { style } from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets=useSafeAreaInsets(); // este Hook permite desplegar info abajo del area superior que no se puede tocar
  const {authState}= useContext(AuthContext);

  return (
    <View style = {{ 
      ...style.globalMargin,
      marginTop: insets.top= 20
    }}
    >
        <Text style={ style.title}>
            Datos de configuración
        </Text>
        <Text>
          { JSON.stringify(authState, null,4)}
        </Text>
    </View>
  )
}
