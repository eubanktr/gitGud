const sequelize = require('../config/connection')
const seedGames = require('./games-seeds')
const seedUsers = require('./users-seeds')
const seedRatings = require('./ratings-seeds')
const seedSystems = require('./systems-seeds')
const seedPosts = require('./posts-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedSystems();
    await seedUsers();
    await seedRatings();
    await seedGames();
    await seedPosts();
    process.exit(0);
};

seedAll()