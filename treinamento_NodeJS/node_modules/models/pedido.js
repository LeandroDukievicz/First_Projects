'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.cliente);
      Pedido.belongsToMany(models.Servico,{trough:'ItemPedido'});
    }
  }
  Pedido.init({
    dataPedido: DataTypes.DATEONLY,
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};