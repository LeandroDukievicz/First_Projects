'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cliente.hasMany(models.Pedido);

    }
  }
  cliente.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    cidade: DataTypes.STRING,
    uf:DataTypes.STRING,
    dataNascimento:DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'cliente',
  });
  return cliente;
};