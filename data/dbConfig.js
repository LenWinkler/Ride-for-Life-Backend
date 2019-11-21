const knex = require('knex');
require('dotenv').config();

const config = require('../knexfile.js');
const environment = process.env.ENVIRONMENT || 'development';

module.exports = knex(config[environment]);