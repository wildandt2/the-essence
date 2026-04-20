const db = require('./db')

const getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users')
  return result.rows
}

const createUser = async (name) => {
  const result = await db.query(
    'INSERT INTO users (name) VALUES ($1) RETURNING *',
    [name]
  )
  return result.rows[0]
}

module.exports = { getAllUsers, createUser }