import { DrawerScreenProps } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { style } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any,any>{};

export const Home = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title:'',
      headerBackTitle:'Inicio'
    })
  }, [])  // Sol se ejecuta una sola vez
  
  return (
    <View style={ style.globalMargin }  >
        <Text style={style.title}> Principal</Text>
        <Button
        title= "Ir a pagina Lista de tagTemporales "
        onPress= { () =>  navigation.navigate('ListaTagTemporales')}
        />
    </View>
  )
}
