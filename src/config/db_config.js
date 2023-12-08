
const { Sequelize, DataTypes} = require('sequelize');
require ('dotenv').config();

  const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  });

  sequelize.sync() 
  .then(() => {
    console.log('Database and tables synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });
    module.exports= sequelize;
