const sequelize = require('../config/db_config');
 
const { Sequelize, DataTypes } = require('sequelize');

  const Hotel = sequelize.define('hotel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    facility: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
   updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    
  });

  module.exports = Hotel

