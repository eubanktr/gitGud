const { Games } = require('../models')

const gameData = [
  {
    game_title: 'Apex Legends'
  },
  {
    game_title: 'Call of Duty Warzone'
  },
  {
    game_title: 'Fortnite'
  },
  {
    game_title: 'Rainbow Six: Siege'
  }
]

const seedGames = () => Games.bulkCreate(gameData)
module.exports = seedGames