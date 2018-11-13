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
    addGame: async (root, data) => {
      const game = new Game(data)
      return game
    }
  }
}
