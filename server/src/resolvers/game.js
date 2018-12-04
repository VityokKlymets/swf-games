import Game from '../models/Game'
import categories from '../data/categories'
import { ApolloError } from 'apollo-server-express'
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
      const games = await Game.find()
        .where({
          name: new RegExp(query)
        })
        .limit(10)
        .sort({ createdAt: -1 })
      return toResJsonGames(games)
    },
    games: async (root, { category = null }) => {
      const predicate = {}
      if (category) predicate.category = category
      const games = await Game.find(predicate).limit(10).sort({ createdAt: -1 })
      return toResJsonGames(games)
    },
    gamesWithCategories: async () => {
      const result = []
      for (let i = 0; i < categories.length; i++) {
        const games = await Game.find({ category: categories[i].value })
          .limit(5)
          .sort({ createdAt: -1 })
        result.push(games)
      }
      return result
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
    },
    removeGame: async (root, { id }) => {
      const record = await Game.findById(id)
      if (record) {
        record.removeStaticFiles()
        record.remove()
        return record
      } else throw new ApolloError('Game not found!')
    }
  }
}
