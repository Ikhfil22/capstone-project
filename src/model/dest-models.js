const sequelize = require('../config/db_config');
const { DataTypes } = require('sequelize'); 


  const Dest = sequelize.define('destination', {
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
    description: {
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

  module.exports = Dest

