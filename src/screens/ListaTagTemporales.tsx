import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { style } from '../theme/appTheme';

export const ListaTagTemporales = () => {
  const navigator = useNavigation();
  // Es un Hook que ya se proporciona, aunque el metodo de usar los props es mejor
  // ya que no carga el hook.
  // Aqui debemos fijar el titulo de la liga de navegacion de regreso
  useEffect(() => {
    navigator.setOptions({
      title: '',
      headerBackTitle: 'Principal'
    })
  }, [])  // Sol se ejecuta una sola vez

  return (
    <View style={style.globalMargin}>
      <Text style={style.title}> Lista de TagTemporales</Text>
     
      <View style={{ flexDirection: 'row'}}>

      <TouchableOpacity
      style={ {
        ...style.botonGrande,
      backgroundColor: '#5856DG'}}
        onPress={() => navigator.navigate('AgregarTagTemporal', { id: 12234, tagTemporal: 'tag-B7634' })}
      >
        <Text style = {style.botonGrandeTexto}> tag-B7634</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={ {
        ...style.botonGrande,
      backgroundColor: '#FF9427'}}
        onPress={() => navigator.navigate('AgregarTagTemporal', { id: 12234, tagTemporal: 'tag-123' })}
      >
        <Text style = {style.botonGrandeTexto}> tag-123</Text>
      </TouchableOpacity>
      </View>

    </View>
  )
}