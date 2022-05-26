import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerContentOptions } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavegator } from './StackNavegator';
import { Image, Text, useWindowDimensions, View , TouchableOpacity} from 'react-native';
import { style } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const{width} = useWindowDimensions();
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
      //headerShown: false  // Oculta la hamburguesa
   }}
     drawerContent = { (props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="Tabs"  component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      { /* Parte del avatar*/}
      <View style={style.avatarContainer}>
        <Image
        source={{
          uri:'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png'
        }}
        style={style.avatar}/>
      </View>
      { /* Opcion es del menu*/}
      <View style={ style.menuContainer}>
        <TouchableOpacity 
        style={{
          ...style.menuLiga,
          flexDirection: 'row'
        }}
        onPress = { () => navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={ 23 } color="black" />
          <Text style={style.menuTexto}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={{
          ...style.menuLiga,
          flexDirection: 'row'
        }}
        onPress = { () => navigation.navigate('SettingsScreen')}
        >
          <Icon name="cog-outline" size={ 23 } color="black" />
        <Text style={style.menuTexto}>Configuración</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
 
  );
}