const router = require('express').Router();
let Investimento = require('../models/investimento.model');
mongo = require('mongodb');

router.route('/').get((req, res) => {
  const usuario = req.body.usuario;

  Investimento.find()
    .then(invest => res.json(invest))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const tipo = req.body.tipo;
  const categoria = req.body.categoria;
  const descricao = req.body.descricao;
  const valor = req.body.valor;
  const usuario = req.body.usuario;
  const data = req.body.data;

  const novoInvestimento = new Investimento({data: data, descricao: descricao, valor: valor, usuario: usuario, categoria: categoria, tipo:tipo});

  novoInvestimento.save()
    .then(() => res.status(200).json({status:"Investimento cadastrado"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete').delete((req, res) => {
  console.log(req.body);
  var o_id = new mongo.ObjectID(req.body.id);

  Investimento.deleteOne({_id: o_id})
    .then(() => res.status(200).json({status:"Investimento removido"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit').post((req, res) => {
  var o_id = new mongo.ObjectID(req.body.id);
  const tipo = req.body.tipo;
  const descricao = req.body.descricao;
  const valor = req.body.valor;
  const categoria = req.body.categoria;
  const data = req.body.data;

  Investimento.updateOne({_id: o_id}, 
    { $set: {tipo: tipo, descricao: descricao, valor: valor, categoria: categoria, data: data} },{upsert: true},)
    .then(() => res.status(200).json({status:"Investimento atualizado"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

