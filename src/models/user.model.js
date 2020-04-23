const bcrypt = require('bcryptjs');

const user = (sequelize, Sequelize) => {

    const User = sequelize.define('User', {
        name: Sequelize.STRING,
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        status: Sequelize.INTEGER,
        password: Sequelize.STRING,
        role: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    });

    User.associate = function (models) {
        
    };

    User.beforeCreate(generateHash);

    User.beforeUpdate(generateHash);

    return User;
};

function generateHash(user) {
    if (user === null) {
        throw new Error('No found employee');
    } else if (!user.changed('password')) {
        return user.password;
    } else {
        let salt = bcrypt.genSaltSync();
        return user.password = bcrypt.hashSync(user.password, salt);
    }
}

module.exports = user;