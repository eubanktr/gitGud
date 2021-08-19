const { Users } = require('../models')

const userData = [
    {
        email: 'lorenzo@test.com',
        username: 'lorenzo',
        password: 'password123',
        age: 25,
        system_id: 1,
    },
    {
        email: 'carson@test.com',
        username: 'carson',
        password: 'password123',
        age: 25,
        system_id: 2
    },
    {
        email: 'tommy@test.com',
        username: 'tommy',
        password: 'password123',
        age: 25,
        system_id: 3
    },
    {
        email: 'zach@test.com',
        username: 'zach',
        password: 'password123',
        age: 25,
        system_id: 1
    },
]
const seedUserData = () => Users.bulkCreate(userData, {individualHooks: true, returning: true})
module.exports = seedUserData