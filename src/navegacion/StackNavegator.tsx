import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AgregarTagTemporal } from '../screens/AgregarTagTemporal';
import { AgregarVisitante } from '../screens/AgregarVisitante';
import { Home } from '../screens/Home';
import { ListaTagTemporales } from '../screens/ListaTagTemporales';
import { ListaVisitantes } from '../screens/ListaVisitantes';
import { Login } from '../screens/Login';
import { NavegaTagTemporal } from '../screens/NavegaTagTemporal';
import { RecuperarContraseña } from '../screens/RecuperarContraseña';

export type RootStackParams = {
  AgregarTagTemporal: {id: number, tagTemporal: string}, 
  AgregarVisitante : {id: number, nombre: string},
  Home : undefined,
  ListaTagTemporales : undefined,
  ListaVisitantes : undefined,
  Login : undefined,
  NavegaTagTemporal : undefined,
  RecuperarContraseña : undefined,




}
const Stack = createStackNavigator<RootStackParams>();

export const  StackNavegator = () => {
  return (
    <Stack.Navigator
     initialRouteName='Login' // Donde queremos que empiece
     screenOptions= {{
      headerStyle:{
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle:{
        backgroundColor:'white'
      }
     }}
    >
      <Stack.Screen name="Home" options={{title:'Inicio'}} component={Home} />
      <Stack.Screen name="AgregarTagTemporal" options={{title:'Agregar tagTemporal'}} component={AgregarTagTemporal} />
      <Stack.Screen name="AgregarVisitante" options={{title:'Agregar visitante'}} component={AgregarVisitante} />
      <Stack.Screen name="ListaTagTemporales" options={{title:'Lista de tagTemporales'}} component={ListaTagTemporales} />
      <Stack.Screen name="ListaVisitantes" options={{title:'Lista de visitantes'}} component={ListaVisitantes} />
      <Stack.Screen name="Login" options={{title:'Entrar a tagTemporal'}} component={Login} />
      <Stack.Screen name="NavegaTagTemporal" options={{title:'Navegar al destino del tagTemporal'}} component={NavegaTagTemporal} />
      <Stack.Screen name="RecuperarContraseña" options={{title:'Recuperar su contraseña'}} component={RecuperarContraseña } />
    </Stack.Navigator>
  );
}