import { saveStaticFile } from '../utils/fileLoader'
import path from 'path'
import mongoose from 'mongoose'
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
schema.methods.uploadFile = function uploadFile ({ result, extension }) {
  const fileName = `game.${extension}`
  const Path = path.join(process.env.STATIC_FOLDER, 'games', this.id)
  this.src = saveStaticFile(result, Path, fileName, 'binary')
}
export default mongoose.model('Game', schema)
