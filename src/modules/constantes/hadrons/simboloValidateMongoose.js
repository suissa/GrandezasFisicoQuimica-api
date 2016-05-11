'use strict';

const atomName = 'simbolo';
const atomNameMaiusculo = atomName.charAt(0).toUpperCase() + atomName.slice(1);
const validate = 'is';

module.exports = {
  validator: require('./../quarks/'+validate+atomNameMaiusculo)
, message: require('./../quarks/'+validate+atomNameMaiusculo+'Message')
};