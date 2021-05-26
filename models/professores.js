'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  professores.init({
    resumo: DataTypes.STRING,
    professor: DataTypes.BOOLEAN,
    disciplinas: DataTypes.STRING,
    aulagratis: DataTypes.BOOLEAN,
    valormulta: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'professores',
  });
  return professores;
};