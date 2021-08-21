const { Posts } = require('../models');

const postData = [
  {
    author: 'TommYxGUN',
    game: 'Rainbow Six Seige',
    body: `Looking for group. Newbs Welcome. Let's get these dubs.`
  },
  {
    author: 'mcRen',
    game: 'Rainbow Six Seige',
    body: `LFG and trying to kick some doors.`
  },
  {
    author: 'ShadyTortuga',
    game: 'Rainbow Six Seige',
    body: `Slow and steady wins the comp. LETS GOOO!`
  },
  {
    author: 'SteveHenny',
    game: 'Rainbow Six Seige',
    body: `Let's bang some drums`
  }
]
const seedPosts = () => Posts.bulkCreate(postData) // {individualHooks: true, returning: true}
module.exports = seedPosts