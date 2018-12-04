import dotenv from 'dotenv'
import path from 'path'
const { NODE_ENV, STATIC_FOLDER, GAMES_FOLDER } = dotenv.config().parsed
const staticEnviroumentSetup = () => {
  process.env.ROOT = NODE_ENV === 'development' ? __dirname : process.cwd()
  process.env.GAME_FOLDER_PATH = path.join(STATIC_FOLDER, GAMES_FOLDER)
}
export default () => {
  staticEnviroumentSetup()
}
