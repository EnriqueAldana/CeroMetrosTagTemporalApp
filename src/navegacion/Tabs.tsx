import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from "../screens/Tab2Screen";
import { StackNavegator} from './StackNavegator'
import {colores} from '../theme/appTheme';
import { Platform, Text } from "react-native";
import { TopTabNavigator } from "./TopTabNavigator";



export const Tabs = () =>{

  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: colores.primary
      }}
      screenOptions={ ({ route }) => ({
        tabBarIcon: ({ color, focused }) => {

          let iconName: string = '';
          //console.log(route.name)
            switch( route.name ) {
              case 'Tab1Screen':
                iconName = 'bandage-outline'
              break;

              case 'Tab2Screen':
                iconName = 'basketball-outline'
              break;

              case 'StackNavegator':
                iconName = 'bookmarks-outline'
              break;
            }

          return <Icon name={ iconName } size={ 25 } color={ color } />
        },
        tabBarOptions:{
          showIcon: true,
          pressColor: 'cyan',
          style: {
            backgroundColor: colores.primary,
          },
          inactiveTintColor: 'white',
          activeTintColor: 'cyan'
        }
      })}
      
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } /> 
      <BottomTabAndroid.Screen name="StackNavegator" options={{ title: 'Stack' }} component={ StackNavegator } />
    </BottomTabAndroid.Navigator>
  );
}


const BottomTabIOS = createBottomTabNavigator();

const TabsIOS= () => {
  return (
    <BottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: 'white',
    }}
    screenOptions={({route}) => ({
      tabBarActiveTintColor: colores.primary,
      tabBarStyle: {
        borderTopColor: colores.primary,
        borderTopWidth: 0,
        elevation: 0,
      },
      labelStyle: {
        fontSize: 15
      },
      tabBarIcon: (props) => {

          let iconName: string = '';
          switch(route.name) {
              case 'Tab1Screen' :
                  iconName = 'T1'
              break;

              case 'Tab2Screen' :
                  iconName = 'T2'
              break;

              case 'StackNavigator' :
                  iconName = 'ST'
              break;
          }
          return <Text style={{color: props.color}}>{ iconName }</Text>
      }



    })}
    >
      <BottomTabIOS.Screen name="Tab1Screen" 
      options= {{title: 'Tab1'}} 
      component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" 
      options= {{title: 'Tab2'}}  
      component={TopTabNavigator} />
      <BottomTabIOS.Screen name="Tab3Screen" 
      options= {{title: 'Tab2'}} 
      component={StackNavegator} />
      
    </BottomTabIOS.Navigator>
  );
}

