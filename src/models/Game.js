import { saveStaticFile } from '../utils/fileLoader'
import path from 'path'
import mongoose from 'mongoose'
// TODO validation, sequelize, error messages
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    screenshot: { type: String, required: true },
    src: { type: String, required: true }
  },
  {
    timestamps: true
  }
)
schema.methods.uploadFile = function uploadFile ({ result, extension }) {
  const fileName = `game.${extension}`
  const Path = path.join(process.env.GAMES_FOLDER, this.id)
  this.src = saveStaticFile(result, Path, fileName, 'binary')
}
schema.methods.uploadScreenshot = function uploadScreenshot ({
  result,
  extension
}) {
  const fileName = `screenshot.${extension}`
  const Path = path.join(process.env.GAMES_FOLDER, this.id)
  this.screenshot = saveStaticFile(result, Path, fileName, 'base64')
}
export default mongoose.model('Game', schema)
