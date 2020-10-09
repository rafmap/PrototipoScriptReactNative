import { pastSimple, pastParticiple } from '../TelaVerbos';

export function gerarIndexVerbo(){
  return Math.floor(Math.random() * (23 + 0 - 0) + 0);
}

export function gerarIndexConjugacao(){
  return Math.floor(Math.random() * (2 + 0 - 0) + 0);
}

export function validarResposta(indexVerbo, indexConjugacao, respostaUsuario){
  const tempo = [pastSimple, pastParticiple];
  const respostaCerta = tempo[indexConjugacao][indexVerbo];
  if (respostaUsuario.toUpperCase() === respostaCerta.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}