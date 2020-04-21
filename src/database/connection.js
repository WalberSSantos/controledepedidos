const knex = require('knex');
const configuracao = require('../../knexfile');

const conn = knex(configuracao.development);

module.exports = conn;