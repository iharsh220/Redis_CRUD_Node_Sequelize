const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/sequelize');
const { v4: uuidv4 } = require('uuid');

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    timestamps: true,
});

module.exports = Item;
