const userModel = require('../models/userModel')

const getUser = async (req, res) => {
  const data = await userModel.getAllUsers()
  res.json(data)
}

const createUser = async (req, res) => {
  const { name } = req.body
  const user = await userModel.createUser(name)

  res.json(user)
}

module.exports = { getUser, createUser }