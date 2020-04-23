require('dotenv').config();

const database = {

    development: {
        storage: './src/database/db.sqlite',
        dialect: 'sqlite',
    },

    test: {
        storage: ':memory:',
        dialect: 'sqlite',
    },

    production: {

    }
}

module.exports = database[process.env.NODE_ENV || 'development'];
