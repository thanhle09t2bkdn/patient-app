'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Patients', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthday: {
          type: Sequelize.DATEONLY,
          allowNull: false
      },
      gender: {
          type: Sequelize.INTEGER,
          allowNull: false
      },
      pastMediacation: {
          type: Sequelize.STRING,
          allowNull: true
      },
      tags: {
          type: Sequelize.STRING,
          allowNull: true
      },
      contact: {
          type: Sequelize.JSON,
          allowNull: false
      },
      pregnancy: {
          type: Sequelize.BOOLEAN,
          allowNull: false
      },
      elaboration: {
          type: Sequelize.STRING,
          allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Patients');
  }
};