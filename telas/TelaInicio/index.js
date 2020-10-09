import React, { useState } from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

import { validarResposta, gerarIndexVerbo, gerarIndexConjugacao } from './funcoes';
import { verbs } from '../TelaVerbos';

import estilo from './estilo';
import imgVerb from '../../assets/img-placeholder.jpg'

export default function TelaInicio(props) {
  const [ indexVerbo, setIndexVerbo ] = useState(gerarIndexVerbo());
  const [ indexConjugacao, setIndexConjugacao ] = useState(gerarIndexConjugacao());
  const [ respostaUsuario, setRespostaUsuario ] = useState("");
  const [ pts, setPts ] = useState(0);

  const conjugacao = ["Past Simple", "Past Participle"];

  const criarPergunta = () => {
    setIndexVerbo(gerarIndexVerbo());
    setIndexConjugacao(gerarIndexConjugacao());
    setRespostaUsuario("");
  }

  const responder = () => {
    if ( validarResposta(indexVerbo, indexConjugacao, respostaUsuario) ) {
      //alert("Right!");
      setPts(pts+1);
      if (pts+1 == 10){
        abrirTelaPassou();
      }
    } else {
      //alert("Wrong...");  
      if (pts > 0) {
        setPts(pts-1);
      }
    }   
    
    criarPergunta();    
  }

  const abrirTelaVerbos = () => {
    props.navigation.navigate('Verbos');
  }

  const abrirTelaPassou = () => {
    props.navigation.navigate('Passou');
  }

  return (
    <View style={estilo.tela}>
      <View style={estilo.boxPergunta}>
        <Text style={estilo.titulo}>
          { verbs[indexVerbo] }
        </Text>

        <Image source={imgVerb} style={estilo.imagem} />
          <View style={estilo.boxConjugacao}>
            <Text style={estilo.texto}>            
              { conjugacao[indexConjugacao] }:
            </Text>
          </View>
        
        <View style={estilo.boxResposta}>
          <TextInput 
            textAlign = "center"
            onChangeText = { setRespostaUsuario } 
            keyboardType = "default" 
            value = {respostaUsuario.toString()} 
            autoFocus = {true}
            style = { estilo.input } />

          <View style={estilo.boxBotao}>
            <Button title="OK" onPress={responder} color="#00f"/>
          </View>
        </View>

        <View style={estilo.boxExtras}>
          <View style={estilo.boxBotao}>
            <Button title="Skip" onPress={criarPergunta} color="#f00"/>
          </View>
          <Text style={estilo.pontos}>
            {pts} Points
          </Text>
        </View>
      </View>

      <View style={estilo.boxBotaoLista}>
        <Button source={imgVerb} title="Irregular Verbs List" onPress={abrirTelaVerbos} color="#000"/>
      </View>
    </View>

  );
}
