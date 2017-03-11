'use strict';
const Patient = require('../models').Patient;
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Patient
    .create([
        {
      name: 'Joker son',
      birthday: '03-02-1994',
      gender: 1,
      pastMediacation: 'joker@gmail.com',
      tags: 'Appointment',
      contact: '{"location":"Phonix"}',
      pregnancy: false,
      elaboration: 'Three months later'
    },
    {
      name: 'Joker Thanh',
      birthday: '03-02-1994',
      gender: 1,
      pastMediacation: 'thanhle@gmail.com',
      tags: 'Appointment',
      contact: '{"location":"Phonix"}',
      pregnancy: false,
      elaboration: 'Three months later'
    },
    {
      name: 'Joker Anh',
      birthday: '03-02-1994',
      gender: 1,
      pastMediacation: 'ta@gmail.com',
      tags: 'Appointment',
      contact: '{"location":"Phonix"}',
      pregnancy: false,
      elaboration: 'Three months later'
    }
        ]
    )
    .then(patient => {return true;})
    .catch(error => {console.log(error); return false;});
  },

  down: function (queryInterface, Sequelize) {
    return Patient.destroy({
    }).then(affectedRows => {
      console.log(affectedRows); return true;
    }).catch(error => {
      console.log(error); return false;
    });
  }
};
