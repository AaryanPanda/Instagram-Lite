const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePhoto: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  validate: {
    eitherPasswordOrGoogleId() {
      if (!this.password && !this.googleId) {
        throw new Error('Either password or Google ID must be provided');
      }
    },
  },
});

module.exports = User;
