'use strict';

const grandezas = {
  g: require('./g'),
  R: require('./R'),
  P0: require('./P0'),
  e: require('./e'),
  k: require('./k'),
  F:require('./F'),
  h: require('./h'),
  m: require('./m'),
  NA: require('./NA'),
  c: require('./c'),
  Vmol: require('./Vmol'),
  T0: require('./T0')
};

const procuraConstantePorSimbolo = (simbolo) => {
  if(simbolo in grandezas) return  grandezas[simbolo];  
};
const listaConstantes = () => {
  let constantesArray = [];
  for (var p in grandezas) {
    if( grandezas.hasOwnProperty(p) ) {
      let obj = grandezas[p]
      constantesArray.push(grandezas[p]);
    }
  }
  return constantesArray;
};

module.exports = { procuraConstantePorSimbolo, listaConstantes};

