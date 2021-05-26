'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class avaliacoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  avaliacoes.init({
    comentavalicao: DataTypes.STRING,
    estrelaavalicao: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'avaliacoes',
  });
  return avaliacoes;
};