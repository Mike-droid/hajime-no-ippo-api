//import { Model, DataTypes, Sequelize, ModelCtor } from "sequelize";
import { Table, Column, Model, HasMany, DataType, ModelCtor, Sequelize } from 'sequelize-typescript'

const COUNTRY_TABLE = 'countries';

const countrySchema = {
  id: {
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
};

class Country extends Model {
  static associate(models: { [x: string]: ModelCtor<Model<any, any>>; Boxer?: any; }) {
    this.hasMany(models.Boxer, {
      as: 'boxers',
      foreignKey: 'country_id',
    })
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: COUNTRY_TABLE,
      modelName: 'Country',
      timestamps: false,
    }
  }
};

export { countrySchema, Country, COUNTRY_TABLE };
