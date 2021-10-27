'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Children extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Children.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      info: DataTypes.TEXT,
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      exp: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Children',
    },
  );
  return Children;
};
