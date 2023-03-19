import { Boxer as BI } from '../interfaces/boxer.interface';
import { arrayBoxers } from "../dummyData/arrayBoxers";
import { models } from "../libs/sequelize";
//import { Boxer as BM } from '../db/models/boxer.model';
import { Identifier } from 'sequelize';

class BoxerService {
  boxers: BI[] = [];

  constructor() {
    this.boxers = arrayBoxers;
  }

  async findAllBoxers() {
    return this.boxers;
  }

  async findBoxerById(id: Identifier | undefined) {
    const boxer = await models.model('Boxer').findByPk(id)
    return boxer;
  }
}

export default BoxerService;
