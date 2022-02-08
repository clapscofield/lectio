const mongoose = require('mongoose');
var db = require('../database.js');

const Schema = mongoose.Schema;

const entradaSchema = new Schema({
  categoria: { type: String },
  data: { type: String },
  descricao: { type: String },
  valor: { type: Number},
  usuario: { type: String },
  tipo: {type: String}
}, {
  timestamps: true,
}, { collection : 'Entradas' });

const Entradas = mongoose.model('Entradas', entradaSchema);

module.exports = Entradas;