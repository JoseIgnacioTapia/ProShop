import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import User from "./user";

const Product = db.define("Product", {
  productID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "userID",
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
    allowNull: false,
  },
  countInStock: {
    type: DataTypes.NUMBER,
    defaultValue: 0,
    allowNull: false,
  },
  timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

Product.belongsTo(User, {
  foreignKey: {
    name: "userID",
    allowNull: false,
  },
});

export default Product;
