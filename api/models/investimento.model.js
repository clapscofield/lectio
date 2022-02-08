const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const investimentoSchema = new Schema({
  categoria: { type: String },
  data: { type: String },
  descricao: { type: String },
  valor: { type: Number},
  usuario: { type: String },
  tipo: {type: String}
}, {
  timestamps: true,
}, { collection : 'Investimentos' });

const Investimentos = mongoose.model('Investimentos', investimentoSchema);

module.exports = Investimentos;