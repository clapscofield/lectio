const config = require("../config/auth.config");
// const db = require("../models");
// const Instituicao = db.instituicao;
const Usuario = require('../models/usuario.model');

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const usuario = req.body.usuario;
    const descricao = req.body.descricao;
    const nome = req.body.nome;
    const senha = bcrypt.hashSync(req.body.senha, 8)
    const email = req.body.email;
  
    const newUsuario = new Usuario({nome: nome, descricao: descricao, usuario: usuario, senha: senha, email: email});
  
    newUsuario.save()
      .then(() => res.status(200).json({message:"Usuário cadastrado"}))
      .catch(err => res.status(400).json({message: 'Error: ' + err}));

};

exports.signin = (req, res) => {
  Usuario.findOne({
    usuario: req.body.usuario
  })
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "Usuário não encontrado" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.senha,
        user.senha
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Senha inválida!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      res.status(200).send({
        usuario: user.usuario,
        email: user.email,
        accessToken: token,
        nome: user.nome
      });
    });
};