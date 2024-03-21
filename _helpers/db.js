const config = require('config.json');
<<<<<<< HEAD
const mysql = require('mysql/promise');
=======
const mysql = require('mysql2/promise');
>>>>>>> 4ce08a2 (updated)
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
<<<<<<< HEAD
    //create db if it doesn't already exist
    const { host, port, user, password, database } = config.database;
    const connection = await mysql.createConnection({ host, port, user, password});
    await connection.query(`Create Database If NOT Exist \`${database}\`;`);

    //connect to db
    const sequelize = new Sequelize(database, user, password, {dialect: 'mysql'});

    //init models and add them to the exported db object
    db.User= require('../users/user.model')(sequelize);

    //sync all models with database
    //await sequelize.sync({ alter: true});

}
=======
    // create db if it doesnt already exist
    const { host, port, user, password, database }= config.database;
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);

    // connect to db
    const sequelize = new Sequelize(database, user, password, { dialect: 'mysql' });

    //init models and add them to the exported db object
    db.User = require('../users/user.model')(sequelize);
    db.Product = require('../products/product.model')(sequelize); // Add Product model

    //sync all models with database
    await sequelize.sync({ alter: true });
}

>>>>>>> 4ce08a2 (updated)
