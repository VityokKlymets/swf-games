import Game from '../models/Game'
export default {
  Query: {
    game: async (root, { id }) => {
      const game = await Game.findById(id)
      return game
    }
  },
  Mutation: {
    addGame: async (root, data) => {
      const game = new Game(data)
      return game
    }
  }
}
