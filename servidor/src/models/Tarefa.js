
const { Model, DataTypes } = require('sequelize');

class Tarefa extends Model {
  static init(sequelize) {
    super.init({
      descricao: DataTypes.STRING,
      tempoLimite: DataTypes.DATE,
      concluido: DataTypes.BOOLEAN,
    }, {
      sequelize,
    })
  }
}

module.exports = Tarefa;