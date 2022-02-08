  
const router = require('express').Router();
let Estudante = require('../models/estudante.model');

router.route('/').get((req, res) => {
  Estudante.find()
    .then(eq => res.json(eq))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const nome = req.body.nome;
    const dataNascimento = req.body.dataNascimento;
    const turma = req.body.turma;
    const matricula = req.body.matricula;
    const email = req.body.email;
    const senha = req.body.senha;
    const minutosEstudados = req.body.minutosEstudados;
    const idEquipe = req.body.idEquipe;
    const idGuerra = req.body.idGuerra;
    const idInstituicao = req.body.idInstituicao;

  const newEstudante = new Estudante({ 
      nome: nome,
      dataNascimento: dataNascimento,
      turma: turma,
      matricula: matricula,
      email: email,
      senha: senha,
      minutosEstudados: minutosEstudados,
      idEquipe: idEquipe,
      idGuerra: idGuerra,
      idInstituicao: idInstituicao
    });

  newEstudante.save()
    .then(() => res.status(200).json({status:"Estudante cadastrado com sucesso!"}))
    .catch(err => res.status(400).json({status: 'Error: ' + err}));
});

router.route('/add-estudo').post((req, res) => {
  const matricula = req.body.matricula;
  const tempo = req.body.tempo;

  Estudante.findOneAndUpdate(
    { matricula: matricula }, 
    { $inc: { minutosEstudados: tempo } },
    function (error, success) {
         if (error) {
             console.log(error);
             res.status(400).json({status:"Erro"});
         } else {
             console.log(success);
             res.status(200).json({status:"Estudos atualizados!"});
         }
  });

});

module.exports = router;