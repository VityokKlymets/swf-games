import { saveStaticFile } from '../utils/fileLoader'
import categories from '../data/categories'
import path from 'path'
import mongoose from 'mongoose'
// TODO validation, sequelize, error messages
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, lowercase: true },
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
  const Path = path.join(process.env.GAME_FOLDER_PATH, this.id)
  this.src = process.env.HOST + saveStaticFile(result, Path, fileName, 'binary')
}
schema.methods.uploadScreenshot = function uploadScreenshot ({
  result,
  extension
}) {
  const fileName = `screenshot.${extension}`
  const Path = path.join(process.env.GAME_FOLDER_PATH, this.id)
  this.screenshot =
    process.env.HOST + saveStaticFile(result, Path, fileName, 'base64')
}
schema.methods.toResJson = function toResJson () {
  return {
    id: this._id.toString(),
    createdAt: this.createdAt,
    name: this.name,
    description: this.description,
    src: this.src,
    screenshot: this.screenshot,
    category: categories.find(val => val.value === this.category).text
  }
}

export default mongoose.model('Game', schema)
