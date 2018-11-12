const mongoose = require('mongoose')
// TODO validation, sequelize, error messages
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    src: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
module.exports = mongoose.model('Game', schema)
