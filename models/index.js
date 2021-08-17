const Games = require('./Games')
const Systems = require('./Systems')
const Ratings = require('./Ratings')
const Users = require('./Users')

// Ratings.belongsTo(Games, {
//     foreignKey: 'games_id'
// })

// Users.hasMany(Systems, {
//     foreignKey: 'systems_id'
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

module.exports = { Games, Systems, Ratings, Users }