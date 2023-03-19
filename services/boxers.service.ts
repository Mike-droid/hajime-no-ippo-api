import { Boxer as BI } from '../interfaces/boxer.interface';
import { arrayBoxers } from "../dummyData/arrayBoxers";
//import { models } from "../libs/sequelize";
//import { Identifier } from 'sequelize';

class BoxerService {
  boxers: BI[] = [];

  constructor() {
    this.boxers = arrayBoxers;
  }

  async findAllBoxers() {
    return this.boxers;
  }

  async findBoxerById(id: string) {
    const boxer = this.boxers.find(boxer => boxer.id === id);
    return boxer;
  }
}

export default BoxerService;
