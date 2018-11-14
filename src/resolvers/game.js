import Game from '../models/Game'
import categories from '../data/categories'

export default {
  Query: {
    game: async (root, { id }) => {
      const game = await Game.findById(id)
      return game
    },
    categories: async () => {
      return categories
    }
  },
  Mutation: {
    addGame: async (root, { file, name, description, category }) => {
      const game = new Game()
      game.name = name
      game.description = description
      game.category = category
      game.uploadFile(file)
      const record = await game.save()
      return record
    }
  }
}
