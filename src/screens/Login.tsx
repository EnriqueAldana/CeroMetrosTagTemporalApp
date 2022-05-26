import React, { useContext, useEffect } from 'react'
import { Button,Text, View , TouchableOpacity} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { colores, style } from '../theme/appTheme';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/authContext/AuthContext';


interface Props extends DrawerScreenProps<any,any>{};

export const Login = ({navigation}: Props) => {

  const { singIn,singOut, authState} = useContext(AuthContext)
  useEffect(() => {
    navigation.setOptions({
      title:'Sistema tagTemporal',
      headerBackTitle:'Inicio'
    })
  }, [])  // Sol se ejecuta una sola vez
  return (
    <View style={ {flexDirection: 'row' }} >
      {
authState.isLoggedIn &&
<TouchableOpacity
      style={{
        ...style.botonGrande,
        backgroundColor: '#5856D6'

      }}
      onPress= { () =>  navigation.navigate('Home')}
      
      >
      <Icon
      name="home-outline"
      color = "white"
      size= {35}
      >
      <Text style={ style.botonGrande}> Inicio</Text>
      </Icon>
      </TouchableOpacity>

      }
      
      

      <TouchableOpacity
      style={{
        ...style.botonGrande,
        backgroundColor: '#5856D6'

      }}
onPress= { () =>  navigation.navigate('RecuperarContraseña')}
>
<Icon
      name="medkit-outline"
      color = "white"
      size= {35}
      >
      <Text style={ style.botonGrande}> Contraseña</Text>
      </Icon>
  </TouchableOpacity> 

<TouchableOpacity
  style={{
    ...style.botonGrande,
    backgroundColor: colores.primary1

  }}
onPress= { singIn}
>
<Icon
      name="log-in-outline"
      color = "white"
      size= {35}
      >
      <Text style={ style.botonGrande}>In</Text>
      </Icon>

</TouchableOpacity>
<TouchableOpacity
  style={{
    ...style.botonGrande,
    backgroundColor: colores.primary1

  }}
onPress= { singOut}
>
<Icon
      name="log-out-outline"
      color = "white"
      size= {35}
      >
      <Text style={ style.botonGrande}> Out</Text>
      </Icon>

</TouchableOpacity>


       
    </View>
  )
}