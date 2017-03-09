'use strict';

const User = require('../models').User;
module.exports = {
  up: function (queryInterface, Sequelize) {
    return User
    .create({
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'abc123',
      role: 'ADMIN'
    })
    .then(user => {return true;})
    .catch(error => {console.log(error); return false;});
  },

  down: function (queryInterface, Sequelize) {
    return User.destroy({
      where: {
        'username' : 'admin'
      }
    }).then(affectedRows => {
      console.log(affectedRows); return true;
    }).catch(error => {
      console.log(error); return false;
    });
  }
};
