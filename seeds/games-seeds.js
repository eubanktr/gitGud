const { Games } = require('../models')

const gameData = [
  {
    game_title: 'Apex Legends',
    ratings_id: 3
  },
  {
    game_title: 'Call of Duty Warzone',
    ratings_id: 4
  },
  {
    game_title: 'Fortnite',
    ratings_id: 3
  },
  {
    game_title: 'Rainbow Six: Siege',
    ratings_id: 4
  }
]

const seedGames = () => Games.bulkCreate(gameData)
module.exports = seedGames