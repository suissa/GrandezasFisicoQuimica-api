'use strict';

const atomName = 'definicao';
const validate = 'ValidateMongoose';

module.exports = {
  type: String
, validate: require('./../hadrons/'+atomName+validate)
// , required: true
}