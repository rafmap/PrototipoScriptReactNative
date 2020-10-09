import React from 'react';
import { View, Text, Button, ScrollView, Image, Pressable } from 'react-native';

import estilo from './estilo';
import imgSom from '../../assets/sound.png'

export const verbs = 
  ["to become", "to begin", "to break", "to choose", "to do", "to drive", "to drink", "to eat", "to fall", "to fly", 
  "to forgive", "to forget", "to give", "to go", "to know", "to ride", "to see", "to speak", "to sing", "to swim",
  "to take", "to wake", "to write"];
  export const pastSimple = 
  ["became", "began", "broke", "chose", "did", "drove", "drank", "ate", "fell", "flew", 
  "forgave", "forgot", "gave", "went", "knew", "rode", "saw", "spoke", "sang", "swam",
  "took", "woke", "wrote"];
  export const pastParticiple = 
  ["become", "begun", "broken", "chosen", "done", "driven", "drunk", "eaten", "fallen", "flown", 
  "forgiven", "forgotten", "given", "gone", "known", "ridden", "seen", "spoken", "sung", "swum",
  "taken", "woken", "writen"];

export default function TelaVerbos(props){
  const voltar = () => {
    props.navigation.goBack();
  }

  var myLoop = [];
  for (let i = 0; i < verbs.length; i++){
    myLoop.push(
      <View key={i}>
        <View style={estilo.boxLinha}>
          <View style={estilo.boxInfinitive}>
            <Pressable style={estilo.boxCelula} onPress={()=>alert("Play \"" + verbs[i] + "\" pronunciation sound")}>
              <Image source={imgSom} style={estilo.imagem} /> 
              <Text style={estilo.texto}>            
                {verbs[i]}
              </Text>
            </Pressable>
          </View>

          <View style={estilo.boxPastSimple}>
            <Pressable style={estilo.boxCelula} onPress={()=>alert("Play \"" + pastSimple[i] + "\" pronunciation sound")}>
              <Image source={imgSom} style={estilo.imagem} /> 
              <Text style={estilo.texto}>
                {pastSimple[i]}
              </Text>
            </Pressable>
          </View>

          <View style={estilo.boxPastParticiple}>
            <Pressable style={estilo.boxCelula} onPress={()=>alert("Play \"" + pastParticiple[i] + "\" pronunciation sound")}>
              <Image source={imgSom} style={estilo.imagem} /> 
              <Text style={estilo.texto}> 
                {pastParticiple[i]}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={estilo.tela}>
      <View style={estilo.boxLinha}>
        <View style={estilo.boxTituloColuna}>        
          <Text style={estilo.tituloColuna}>            
            Infinitive
          </Text>
        </View>

        <View style={estilo.boxTituloColuna}>
          <Text style={estilo.tituloColuna}>
            Past Simple
          </Text>
        </View>

        <View style={estilo.boxTituloColuna}>
          <Text style={estilo.tituloColuna}> 
            Past Participle
          </Text>
        </View>
      </View>

      <ScrollView style={estilo.lista}>
        {myLoop}
      </ScrollView>
        
      <View style={estilo.boxBotaoVoltar}>
        <Button title="Back" onPress={voltar} color="#000"/>
      </View>
    </View>
  );

}
