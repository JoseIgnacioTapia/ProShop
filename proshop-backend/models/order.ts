import { DataTypes, Sequelize } from "sequelize";
import db from "../db/connection";
import User from "./user";
import Product from "./product";

const Order = db.define("Order", {
  OrderID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  UserID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "UserID",
    },
  },
  orderItems: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  ShippingAddress: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
  PaymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  PaymentResult: {
    type: DataTypes.JSONB,
  },
  ItemsPrice: {
    type: DataTypes.NUMBER,
    defaultValue: 0.0,
    allowNull: false,
  },
  TaxPrice: {
    type: DataTypes.NUMBER,
    defaultValue: 0.0,
    allowNull: false,
  },
  ShippingPrice: {
    type: DataTypes.NUMBER,
    defaultValue: 0.0,
    allowNull: false,
  },
  TotalPrice: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  IsPaid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  PaidAt: {
    type: DataTypes.DATE,
  },
  IsDelivered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  DeliveredAt: {
    type: DataTypes.DATE,
  },
  Timestamps: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
});

const OrderItem = db.define("OrderItem", {
  OrderItemID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  ProductID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: "ProductID",
    },
  },
  OrderID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Order,
      key: "OrderID",
    },
  },
});

OrderItem.belongsTo(Order, {
  foreignKey: "OrderID",
});

OrderItem.belongsTo(Product, {
  foreignKey: "ProductID",
});
