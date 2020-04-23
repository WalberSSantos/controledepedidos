const up = async (queryInterface, Sequelize) => {

  await queryInterface.createTable('users', {

      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },

      name: Sequelize.STRING,
      email: {
          type: Sequelize.STRING,
          unique: true
      },
      password: Sequelize.STRING,
      created_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
      },
      updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
      }
  });
};

const down = async (queryInterface, Sequelize) => {

  await queryInterface.dropTable('users');
}

module.exports = {
  up,
  down
}