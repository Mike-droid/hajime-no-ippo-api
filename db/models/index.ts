import { Sequelize } from 'sequelize';

import { boxerSchema, Boxer } from "./boxer.model";
import { countrySchema, Country } from "./country.model";
import { weightClassSchema, WeightClass } from "./weightClass.model";

function setupModels(sequelize: Sequelize) {
  Country.init(countrySchema, Country.config(sequelize));
  WeightClass.init(weightClassSchema, WeightClass.config(sequelize));
  Boxer.init(boxerSchema, Boxer.config(sequelize));

  Country.associate(sequelize.models);
  WeightClass.associate(sequelize.models);
  Boxer.associate(sequelize.models);
}

export { setupModels };
