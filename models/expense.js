const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define(
  'expenses',
  {
    id: {
      type: Sequelize.INTEGER, // Use Sequelize's INTEGER data type
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }
);

module.exports = Expense;
