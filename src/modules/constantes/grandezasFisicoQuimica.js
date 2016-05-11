'use strict';

const grandezas = {
  g: require('./grandezas/g'),
  R: require('./grandezas/R'),
  P0: require('./grandezas/P0'),
  e: require('./grandezas/e'),
  k: require('./grandezas/k'),
  F:require('./grandezas/F'),
  h: require('./grandezas/h'),
  m: require('./grandezas/m'),
  NA: require('./grandezas/NA'),
  c: require('./grandezas/c'),
  Vmol: require('./grandezas/Vmol'),
  T0: require('./grandezas/T0')
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

