import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import { StackNavegator } from '/src/navegacion/StackNavegator';
import { MenuLateral } from './src/navegacion/MenuLateral';
import { Tabs } from './src/navegacion/Tabs';
import { AuthProvider } from './src/context/authContext/AuthContext';




const App = () => {
  return (
    <NavigationContainer>
      <AppState>
         <MenuLateral></MenuLateral>
      </AppState>
   {/* <StackNavegator />*/}   
   
    </NavigationContainer>

      
  )
}

const AppState= ({ children}: any)=>{
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}
export default App;

