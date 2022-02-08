const router = require('express').Router();
let GuerraEstudos = require('../models/guerra.model');

router.route('/').get((req, res) => {
  GuerraEstudos.find()
    .then(guerra => res.json(guerra))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const dataInicio = req.body.dataInicio;
  const dataFim = req.body.dataFim;
  const identificador = req.body.identificador;
  const numeroTotalEquipes = req.body.numeroTotalEquipes;
  const numeroAlunosPorEquipe = req.body.numeroAlunosPorEquipe;
  const idInstituicao = req.body.idInstituicao;

  const newGuerra = new GuerraEstudos({ 
      dataInicio: dataInicio, 
      dataFim: dataFim, 
      identificador: identificador, 
      numeroTotalEquipes: numeroTotalEquipes, 
      numeroAlunosPorEquipe: numeroAlunosPorEquipe,
      idInstituicao: idInstituicao
    });

  newGuerra.save()
    .then(() => res.status(200).json({status:"Guerra criada"}))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

