const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class Location extends Model {}

// create fields/columns for Location model
Location.init(
    {
        id: {
            type: DataTypes.INTEGER,
        },
        location_name: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'location'
    }
);

module.exports = Location;
