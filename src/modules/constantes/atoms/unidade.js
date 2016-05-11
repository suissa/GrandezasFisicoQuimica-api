'use strict';

const atomName = 'unidade';
const validate = 'ValidateMongoose';

module.exports = {
  type: String
, validate: require('./../hadrons/'+atomName+validate)
// , required: true
}