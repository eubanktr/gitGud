const { Systems } = require('../models')

const systemData = [
  {
    system_name: 'Xbox'
  },
  {
    system_name: 'Playstation'
  },
  {
    system_name: 'PC'
  },
]

const seedSystems = () => Systems.bulkCreate(systemData)
module.exports = seedSystems