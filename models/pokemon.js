'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pokemon extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    pokemon.init({
        name: DataTypes.STRING,
        hp: DataTypes.INTEGER,
        type: DataTypes.STRING,
        poke_pic: DataTypes.STRING,
        mtype1: DataTypes.STRING,
        mtype2: DataTypes.STRING,
        mtype3: DataTypes.STRING,
        mname: DataTypes.STRING,
        d1: DataTypes.INTEGER,
        m2type1: DataTypes.STRING,
        m2type2: DataTypes.STRING,
        m2type3: DataTypes.STRING,
        m2name: DataTypes.STRING,
        d2: DataTypes.STRING,
        wentype: DataTypes.STRING,
        bentype: DataTypes.STRING,
        rentype: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Card',
        tableName: 'cards',
        timestamps: false
    });
    return pokemon;
};