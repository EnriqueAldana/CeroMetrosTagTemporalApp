import React, { Props, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { style } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navegacion/StackNavegator';
import { TabRouter } from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams,'AgregarTagTemporal'>{};

export const AgregarTagTemporal = ( { route,navigation } : Props) => {
 const params = route.params;
  useEffect(() => {
    navigation.setOptions({
      title:params.tagTemporal,
      headerBackTitle:'Lista tags'
    })
  }, [])  // Sol se ejecuta una sola vez
  return (
    <View style={ style.globalMargin }>
        <Text style={style.title}> Agregar TagTemporal</Text>
        <Button
        title= "Ir a pagina Lista de TagTemporales"
        onPress={ () => navigation.pop() }
        />
        <Button
        title= "Ir a pagina Home"
        onPress={ () => navigation.navigate('Home') }
        />

        <Text>{
        JSON.stringify(params, null,3)
        }</Text>
    </View>
  )
}