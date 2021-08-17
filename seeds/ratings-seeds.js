const { Ratings } = require('../models')

const ratings = [
  {
    rating_letter: 'E'
  },
  {
    rating_letter: 'E+'
  },
  {
    rating_letter: 'T'
  },
  {
    rating_letter: 'M'
  },
  {
    rating_letter: 'A'
  },
  {
    rating_letter: 'RP'
  },
]

const seedRatings = () => bulkCreate(ratings)
module.exports = seedRatings