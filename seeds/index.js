const sequelize = require('../config/connection')
const seedGames = require('./games-seeds')
const seedUsers = require('./users-seeds')
const seedRatings = require('./ratings-seeds')
const seedSystems = require('./systems-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedGames();
    await seedUsers();
    await seedRatings();
    await seedSystems();
    process.exit(0);
};

seedAll()