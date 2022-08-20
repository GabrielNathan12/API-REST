module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tafera', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tempoLimite: {
        type: Sequelize.DATE,
        allowNull: false,
        required: false
      },
      concluido: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      created_t: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_t: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tafera');
  }
};
