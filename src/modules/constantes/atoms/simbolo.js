'use strict';

const atomName = 'simbolo';
const validate = 'ValidateMongoose';

module.exports = {
  type: String
, validate: require('./../hadrons/'+atomName+validate)
// , required: true
}