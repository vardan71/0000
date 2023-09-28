const Sequelize = require('sequelize')

const db = new Sequelize('cardTask', 'postgres', '159753', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})

module.exports = db