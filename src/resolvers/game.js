import Game from '../models/Game'
import categories from '../data/categories'
const toResJsonGames = games => games.map(game => game.toResJson())
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
    findGames: async (root, args) => {
      const query = args.query.toLowerCase() || ''
      const games = await Game.find().where({
        name: new RegExp(query)
      })
      return toResJsonGames(games)
    },
    games: async (root, { category = null }) => {
      const predicate = {}
      if (category) predicate.category = category
      const games = await Game.find(predicate).limit(8).sort({ createdAt: -1 })
      return toResJsonGames(games)
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
