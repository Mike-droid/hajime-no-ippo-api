import { Boxer } from "../interfaces/boxer.interface";
import { arrayBoxers } from "../dummyData/arrayBoxers";

class BoxerService {
  boxers: Boxer[] = [];

  constructor() {
    this.boxers = arrayBoxers;
  }

  async findAllBoxers() {
    return this.boxers;
  }
}

export default BoxerService;
