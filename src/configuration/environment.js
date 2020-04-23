require('dotenv').config();

const environment = {

    development: {
        PORT: 3000
    },

    production: {
        port: process.env.PORT
    }
}

module.exports = environment[process.env.NODE_ENV || 'development'];
