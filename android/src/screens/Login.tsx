import React, { useEffect } from 'react'
import { Button,Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { style } from '../theme/appTheme';
interface Props extends StackScreenProps<any,any>{};

export const Login = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title:'Sistema tagTemporal',
      headerBackTitle:'Inicio'
    })
  }, [])  // Sol se ejecuta una sola vez
  return (
    <View style={ style.globalMargin } >
        <Text style={style.title}> Inicio</Text>
        <Button
        title= "Entrar "
        onPress= { () =>  navigation.navigate('Home')}
        />
        <Button
        title= "Recuperar contraseña "
        onPress= { () =>  navigation.navigate('RecuperarContraseña')}
        />
    </View>
  )
}