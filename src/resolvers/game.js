import Game from '../models/Game'
import categories from '../data/categories'

export default {
  Query: {
    category: async (root, { value }) => {
      return categories.find(cat => cat.value === value)
    },
    game: async (root, { id }) => {
      const game = await Game.findById(id)
      return game.toResJson()
    },
    categories: async () => {
      return categories
    },
    games: async (root, { category = 'null' }) => {
      const predicate = {}
      if (category) predicate.category = category
      const games = await Game.find(predicate)
      return games.map(game => game.toResJson())
    }
  },
  Mutation: {
    addGame: async (
      root,
      { file, name, description, category, screenshot }
    ) => {
      const game = new Game()
      game.name = name
      game.description = description
      game.category = category
      game.uploadScreenshot(screenshot)
      game.uploadFile(file)
      const record = await game.save()
      return record
    }
  }
}
