'use strict';

const express = require('express');
const router = express.Router();
const Grandezas = require('./grandezasFisicoQuimica');

router.get('/', function(req, res, next) {
  res.json(Grandezas.listaConstantes());
});

router.get('/:simbolo', function(req, res, next) {
  res.json(Grandezas.procuraConstantePorSimbolo(req.params.simbolo));
});


router.get('/:simbolo/nome', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.nome);
});

router.get('/:simbolo/valor', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.valor);
});

router.get('/:simbolo/definicao', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.definicao);
});

router.get('/:simbolo/unidade', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.unidade);
});

router.get('/:simbolo/outrasunidades', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.valoresPorUnidade);
});

router.get('/:simbolo/unidade/:indice', function(req, res, next) {
  const constante = Grandezas.procuraConstantePorSimbolo(req.params.simbolo);
  res.json(constante.unidade[req.params.indice]);
});

module.exports = router;
