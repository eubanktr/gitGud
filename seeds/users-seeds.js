const { Users } = require('../models')

const userData = [
    {
        email: 'lorenzo@test.com',
        username: 'lorenzo',
        password: 'password123'
    },
    {
        email: 'carson@test.com',
        username: 'carson',
        password: 'password123'
    },
    {
        email: 'tommy@test.com',
        username: 'tommy',
        password: 'password123'
    },
    {
        email: 'zach@test.com',
        username: 'zach',
        password: 'password123'
    },
]
const seedUserData = () => Users.bulkCreate(userData)
module.exports = seedUserData