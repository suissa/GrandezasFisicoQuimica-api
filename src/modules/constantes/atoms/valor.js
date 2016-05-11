'use strict';

const atomName = 'valor';
const validate = 'ValidateMongoose';

module.exports = {
  type: String
, validate: require('./../hadrons/'+atomName+validate)
// , required: true
}