const postgres = require('postgres')
const knex = require('knex')
require('dotenv').config()

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env
// ! replacement of PG definitions

const db = knex({
  client: 'pg', // Specifies that you're using PostgreSQL
  connection: {
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false },
  },
})
console.log(process.env.POSTGRES_URL);

module.exports = {
    db
};