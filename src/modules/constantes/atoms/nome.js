'use strict';

const atomName = 'nome';
const validate = 'ValidateMongoose';

module.exports = {
  type: String
, validate: require('./../hadrons/'+atomName+validate)
// , required: true
}