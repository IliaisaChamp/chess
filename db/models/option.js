'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Question}) {
      this.belongsTo(Question, {foreignKey: "question_id"})
    }
  };
  Option.init({
    answer: DataTypes.STRING,
    question_id: DataTypes.INTEGER,
    isRight: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Option',
  });
  return Option;
};
