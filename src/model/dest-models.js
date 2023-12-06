const sequelize = require('../config/db_config');
const { DataTypes } = require('sequelize'); 


  const Dest = sequelize.define('destinasi', {
    id: {
      type: DataTypes.STRING, 
      primaryKey: true,
    },
    nama_wisata: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
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

