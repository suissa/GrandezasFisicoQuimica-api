var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 
router.get('/constante/:simbolo', function(req, res, next) {

const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
const buscaConstante = BuscaConstantePorSimbolo()

  res.json(buscaConstante(req.params.simbolo));
});


router.get('/constante/:simbolo/nome', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.nome);
});

router.get('/constante/:simbolo/valor', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.valor);
});

router.get('/constante/:simbolo/definicao', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.definicao);
});

router.get('/constante/:simbolo/unidade', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.unidade);
});


router.get('/constante/:simbolo/unidade/:indice', function(req, res, next) {

  const BuscaConstantePorSimbolo = require('../modules/grandezasFisicoQuimica');
  const buscaConstante = BuscaConstantePorSimbolo()
  const constante = buscaConstante(req.params.simbolo)
  res.json(constante.unidade[req.params.indice]);
});

module.exports = router;
