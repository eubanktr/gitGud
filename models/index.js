const Games = require('./Games')
const Systems = require('./Systems')
const Ratings = require('./Ratings')
const Users = require('./Users')
const Posts = require('./Posts')



// Games.hasOne(Ratings, {
//     foreignKey: 'ratings_id'
// })
// Ratings.belongsTo(Games, {
//     foreignKey: 'ratings_id'
// })

// Users.hasMany(Games, {
//     foreignKey: 'games_id'
// })
// Games.belongsTo(Users, {
//     foreignKey: 'users_id'
// })

// Games.belongsTo(Systems, {
//     foreignKey: 'systems_id'
// })

module.exports = { Games, Systems, Ratings, Users, Posts }