const { DataTypes } = require('sequelize');

module.exports = model;

<<<<<<< HEAD
function model(sequelize) {
    const attributes = {
        email: { type: DataTypes.STRING, allowNull: false},
        passwordHash: { type: DataTypes.STRING, allowNull: false},
        title: { type: DataTypes.STRING, allowNull: false},
        firstName: { type: DataTypes.STRING, allowNull: false},
        lastName: { type: DataTypes.STRING, allowNull: false},
        role: { type: DataTypes.STRING, allowNull: false}
=======
function model (sequelize) { 
    const attributes = {
      email: { type: DataTypes.STRING, allowNull: false }, 
     passwordHash: { type: DataTypes.STRING, allowNull: false }, 
        title: {type: DataTypes. STRING, allowNull: false }, 
        firstName: { type: DataTypes.STRING, allowNull: false }, 
        lastName: { type: DataTypes.STRING, allowNull: false }, 
        role: { type: DataTypes.STRING, allowNull: false }
>>>>>>> 4ce08a2 (updated)
    };

    const options = {
        defaultScope: {
            //exclude password hash by default
            attributes: { exclude: ['passwordHash'] }
<<<<<<< HEAD

=======
>>>>>>> 4ce08a2 (updated)
        },
        scopes: {
            //include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('User', attributes, options);
}