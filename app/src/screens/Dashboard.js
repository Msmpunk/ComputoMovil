import React, { useState }from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

import { StyleSheet, Alert} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function Dashboard({ navigation }) {

  const [selected, setSelected] = React.useState("");
  
  const createThreeButtonAlert = () =>
  Alert.alert('Listo', 'Cita disponible 14:00pm', [
    {
      text: 'Cerrar',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'Confirmar', onPress: () => console.log('OK Pressed')},
  ]);

  const data = [
      {key:'2', value:'Identificación general - 9:00AM a 16:00pm Hoy'},
      {key:'3', value:'Antecedentes médicos - 9:00AM a 16:00pm Hoy'},
      {key:'5', value:'Tratamientos médicos - 9:00AM a 16:00pm Hoy'},
      {key:'6', value:'Análisis clinicos - 9:00AM a 16:00pm Hoy'},
      {key:'7', value:'Historias clinicas - 9:00AM a 16:00pm Hoy'},
  ]


  return (
    <Background>
      <Logo />
      <Header>Bienvenido</Header>
      <Paragraph>
        Consultas
      </Paragraph>

      <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />

      <Button
        mode="contained"
        onPress={() =>{
          createThreeButtonAlert()
        }
        }
      >
        Agendar
      </Button>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Cerrar Sesión
      </Button>
    </Background>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});