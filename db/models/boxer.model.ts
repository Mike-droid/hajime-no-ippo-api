import { Model, DataTypes, Sequelize, ModelCtor } from "sequelize";
import { COUNTRY_TABLE } from "./country.model";
import { WEIGHT_CLASS_TABLE } from "./weightClass.model";

const BOXERS_TABLE = 'boxers';

const boxerSchema = {
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
  totalMatches: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  wins: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  winsByKO: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  losses: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  draws: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  countryId: {
    field: 'country_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: COUNTRY_TABLE,
      key: 'id',
    }
  },
  weightClassId: {
  field: 'weight_class_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: WEIGHT_CLASS_TABLE,
      key: 'id',
    },
  },
  onUpdate: 'CASCADE',
  onDelete: 'SET NULL'
};

class Boxer extends Model {
  static associate(models: { [x: string]: ModelCtor<Model<any, any>>; Country?: any; WeightClass?: any; }) {
    this.belongsTo(models.Country, {
      as: 'country'
    });
    this.belongsTo(models.WeightClass, {
      as: 'weightClass'
    } )
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: BOXERS_TABLE,
      modelName: 'Boxer',
      timestamps: false,
    }
  }
};

export { BOXERS_TABLE, boxerSchema, Boxer };
