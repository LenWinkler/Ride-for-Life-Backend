const knex = require('knex');
require('dotenv').config();

const config = require('../knexfile.js');
const environment = process.env.ENVIRONMENT || 'development';

console.log(config);
console.log(environment);

module.exports = knex(config[environment]);