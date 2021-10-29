'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Option, Test}) {
      this.hasMany(Option, {foreignKey: "question_id"})
      this.belongsTo(Test, {foreignKey: "test_id"})
    }
  };
  Question.init({
    question: DataTypes.STRING,
    test_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
