'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      this.hasMany(Question, {foreignKey: "test_id"})
      
    }
  };
  Test.init({
    level: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};
