import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavegator } from './StackNavegator';

const Drawer = createDrawerNavigator();

export const MenuLateralbasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavegator" component={StackNavegator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}