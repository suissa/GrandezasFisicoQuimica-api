'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Molecule = {
  simbolo: require('./../atoms/simbolo')
, nome: require('./../atoms/simbolo')
, valor: require('./../atoms/simbolo')
, unidade: require('./../atoms/simbolo')
, definicao: require('./../atoms/simbolo')
}
module.exports = new Schema(Molecule);