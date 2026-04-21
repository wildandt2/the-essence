const { Pool } = require('pg')

const pool = new Pool({
  host: 'postgres',
  user: 'postgres',
  password: '1234',
  database: 'cofe_db',
  port: 5432
})

module.exports = pool