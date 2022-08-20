const bancoDDados = require('../configuracoes/database');
const Tarefa = require('../models/Tarefa');
const Sequelize = require('sequelize');

const conexao= new Sequelize(bancoDDados);

Tarefa.init(conexao);

module.exports = conexao;