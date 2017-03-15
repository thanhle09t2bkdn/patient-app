'use strict';
const Patient = require('../models').Patient;
module.exports = {
  up: function (queryInterface, Sequelize) {
    return Patient
      .bulkCreate([
        {
          name: 'Joker son',
          birthday: '03-02-1994',
          gender: 1,
          pastMediacation: 'joker@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Phonix", "postalCode": "12234", "email": "jocker@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "jocker@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Thanh Le',
          birthday: '01-03-1991',
          gender: 1,
          pastMediacation: 'thanhlike09@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Hue", "postalCode": "4324", "email": "thanhlike09@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Tuan Anh',
          birthday: '03-10-1994',
          gender: 1,
          pastMediacation: 'tuananhht94@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Ha tinh", "postalCode": "4324", "email": "tuananhht94@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "anhtuan@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Dong Vo',
          birthday: '03-05-1994',
          gender: 1,
          pastMediacation: 'dongvo@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Phonix", "postalCode": "12234", "email": "dongvo@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "dongdong@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'phuoc lif',
          birthday: '06-09-1994',
          gender: 1,
          pastMediacation: 'phuoclif@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Da Nang", "postalCode": "12234", "email": "phuocphuoc@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Khac Tam',
          birthday: '05-12-1994',
          gender: 1,
          pastMediacation: 'khactam94@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Phonix", "postalCode": "12234", "email": "khactam94@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "tamdn@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Nhan Hoang',
          birthday: '10-10-1994',
          gender: 1,
          pastMediacation: 'hoangtuannhan@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Da Nang", "postalCode": "12234", "email": "nhandn@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Pham Thi Duyen',
          birthday: '12-10-1994',
          gender: 0,
          pastMediacation: 'phamduyen@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Phonix", "postalCode": "12234", "email": "phamduyen@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "daidn@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Nguyen Van Trung',
          birthday: '01-01-1994',
          gender: 1,
          pastMediacation: 'trungnguyen@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Phonix", "postalCode": "12234", "email": "trungnguyen@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "vantrungdn@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        },
        {
          name: 'Giap Tran',
          birthday: '03-10-1992',
          gender: 1,
          pastMediacation: 'giaptran@gmail.com',
          tags: 'Appointment',
          contact: '[{"address":"Laos", "postalCode": "5678", "email": "giaptran@gmail.com"},{"address":"Da Nang", "postalCode": "12234", "email": "giaptrandn@gmail.com"}]',
          pregnancy: false,
          elaboration: 'Three months later'
        }
      ])
      .then(() => {
        return Patient.findAll();
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  },
  down: function (queryInterface, Sequelize) {
    return Patient.destroy({where: {}}).then(affectedRows => {
      console.log(affectedRows);
      return true;
    }).catch(error => {
      console.log(error);
      return false;
    });
  }
};
