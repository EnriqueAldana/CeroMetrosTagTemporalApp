import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavegator } from './StackNavegator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralbasico = () => {

  const{width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
      //headerShown: false  // Oculta la hamburguesa
   }}
      
    >
      <Drawer.Screen name="StackNavegator" options={{title: 'Inicio'}} component={StackNavegator} />
      <Drawer.Screen name="SettingsScreen" options={{title: 'Configuración'}}component={SettingsScreen} />
    </Drawer.Navigator>
  );
}