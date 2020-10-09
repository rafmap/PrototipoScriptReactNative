import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd'
  },

  lista: {
    marginBottom: 15
  },

  imagem: {
    //backgroundColor: '#fff',
    //borderRadius: 10,
    width: 15,
    height: 15,
    marginTop: 3,
    marginRight: 5
  },

  boxTituloColuna: {
    backgroundColor: '#ff0',
    alignItems: 'center',
    width: 130,
    borderBottomWidth: 1
  },

  boxInfinitive: {
    backgroundColor: 'rgba(255,0,0,0.4)',
    alignItems: 'center',
    width: 130,
    paddingBottom: 5
  },
  
  boxPastSimple: {
    backgroundColor: 'rgba(0,255,0,0.4)',
    alignItems: 'center',
    width: 130,
    paddingBottom: 5
  },
  
  boxPastParticiple: {
    backgroundColor: 'rgba(0,0,255,0.4)',
    alignItems: 'center',
    width: 130,
    paddingBottom: 5
  },

  titulo: {
    //marginBottom: 20,
    //paddingHorizontal: 10, 
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#000'
  },

  boxLinha: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }, 

  boxCelula: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  tituloColuna: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
 
  texto: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  },

  boxBotaoVoltar: {
    width: 320,
    marginBottom: 95
  }

});

export default estilo;