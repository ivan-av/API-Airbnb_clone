const { Sequelize } = require('sequelize');

// Create a connection to database
const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'd3s5rr0ll0',
  database: 'airbnb',

});

module.exports = { db };