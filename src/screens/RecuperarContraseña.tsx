import React from 'react'
import { Button,Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { style } from '../theme/appTheme';
interface Props extends StackScreenProps<any,any>{};

export const RecuperarContraseña = ({navigation}: Props) => {
  return (
    <View style={ style.globalMargin } >
        <Text style={style.title}>Recuperar contraseña</Text>
        <Button
        title= "Regresar "
        onPress={ () => navigation.pop() }
        />
        <Button
        title= "Recuperar contraseña "
        onPress={ () => navigation.popToTop() }
        />
    </View>
  )
}