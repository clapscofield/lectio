const router = require('express').Router();
let Usuario = require('../models/usuario.model');

router.route('/').get((req, res) => {
  Usuario.find()
    .then(usuario => res.json(usuario))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const usuario = req.body.usuario;
  const descricao = req.body.descricao;
  const nome = req.body.nome;
  const senha = req.body.senha;
  const email = req.body.email;

  const newUsuario = new Usuario({nome: nome, descricao: descricao, usuario: usuario, senha: senha, email: email});

  newUsuario.save()
    .then(() => res.status(200).json({status:"Usuário cadastrado"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

