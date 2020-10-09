import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aadd'
  },

  boxPergunta: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    width: 320,
    height: 440
  },
  
  titulo: {
    fontSize: 26,
    marginBottom: 10,
    paddingHorizontal: 10, 
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
    color:'#000'
  },

  boxConjugacao: {
    backgroundColor: '#fff',
    width: 280,
  },

  boxResposta: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },  

  texto: {
    fontSize: 22,
    textAlign: 'left',
  },
  
  input: {
    fontSize: 26,
    color: '#00f',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    width: 150,
    paddingHorizontal: 5,
    marginLeft: 10,
    marginRight: 5
  },

  boxExtras: {
    width: 320,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  boxBotao: {
    minWidth: 130
  },

  boxBotaoLista: {
    width: 320
  },

  imagem: {
    width: '100%',
    height: '50%', 
    marginBottom: 10
  },

  pontos: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30
  },

});

export default estilo;