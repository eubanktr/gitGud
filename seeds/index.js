const sequelize = require('../config/connection')
const seedGames = require('./gameData')
const seedUsers = require('./userData')
const seedRatings = require('./ratings')
const seedSystems = require('./systemData')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedGames();
    await seedUsers();
    await seedRatings();
    await seedSystems();
    process.exit(0);
};

seedAll()