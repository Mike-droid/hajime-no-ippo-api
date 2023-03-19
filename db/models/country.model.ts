import { Model, DataTypes, Sequelize, ModelCtor } from "sequelize";

const COUNTRY_TABLE = 'countries';

const countrySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
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
