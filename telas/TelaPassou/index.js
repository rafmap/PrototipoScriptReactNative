import React from 'react';
import { View, Text, Button } from 'react-native';

import estilo from './estilo';

export default function TelaPassou(props){
  const voltar = () => {
    props.navigation.goBack();
  }

  return (
    <View style={estilo.tela}>
      <View style={estilo.boxPassou}>
        <Text style={estilo.titulo}>10 points!</Text>
        <Text style={estilo.texto}>You reached the next level</Text>    
      </View>

      <View style={estilo.boxBotaoVoltar}>
        <Button title="Back" onPress={voltar} color="#000"/>
      </View>            
    </View>
  );

}