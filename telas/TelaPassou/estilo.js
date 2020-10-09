import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  tela: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aaff'
  },

  boxPassou: {
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 160,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    width: 320,
    height: 320
  },

  titulo: {
    fontSize: 26,
    marginTop: 80,
    marginBottom: 10,
    paddingHorizontal: 10, 
    textTransform: 'uppercase',
    fontWeight: '700',
    textAlign: 'center',
    color:'#000'
  },

  texto: {
    fontSize: 22,
    textAlign: 'center',
  },

  boxBotaoVoltar: {
    width: 320,
    marginBottom: 95
  }

});

export default estilo;