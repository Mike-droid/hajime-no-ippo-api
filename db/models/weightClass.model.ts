import { Model, DataTypes, Sequelize, ModelStatic, ModelCtor } from "sequelize";

const WEIGHT_CLASS_TABLE = 'weight_classes';

const weightClassSchema = {
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

class WeightClass extends Model {
  static associate(models: { [x: string]: ModelCtor<Model<any, any>>; Boxer?: any; }) {
    this.hasMany(models.Boxer, {
      as: 'boxers',
      foreignKey: 'weight_class_id',
    })
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: WEIGHT_CLASS_TABLE,
      modelName: 'WeightClass',
      timestamps: false,
    }
  }
};

export { WEIGHT_CLASS_TABLE, weightClassSchema, WeightClass };
