const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Guard = sequelize.define(
  "guards",
  {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    pf_number: DataTypes.STRING,
    esic_number: DataTypes.STRING,
    mobile: DataTypes.STRING,
    post: DataTypes.STRING,
    code: DataTypes.STRING,
    address: DataTypes.STRING,
    accountName: DataTypes.STRING,
    ifscCode: DataTypes.STRING,
    accountNumber: DataTypes.STRING,
    document: DataTypes.JSON,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "guards",
    updatedAt: false,
  }
);

module.exports = Guard;
