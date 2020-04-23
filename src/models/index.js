const filesystem = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const configuration = require('../configuration/database');

const database = {};
console.log(configuration)
const sequelize = new Sequelize('', '', '', {...configuration.database});

filesystem
	.readdirSync(__dirname)
	.filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
	.forEach(file => {
		const model = sequelize.import(path.join(__dirname, file));
		database[model.name] = model;
	});

Object.keys(database).forEach(modelName => {
	if (database[modelName].associate) {
		database[modelName].associate(database);
	}
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;

