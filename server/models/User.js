const bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    username:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email:{
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role:{
      type: DataTypes.ENUM('ADMIN', 'NORMAL_USER'),
      defaultValue: 'NORMAL_USER'
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      validatePassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
      generateHash(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      }
    },
    hooks: {
      beforeCreate: function(user, options) {
        if(user.changed('password')) {
          user.password = this.generateHash(user.password);
        }
      },
      beforeUpdate: function(user, options) {
        if(user.changed('password')) {
          user.password = this.generateHash(user.password);
        }
      },
    }
  });
  return User;
};