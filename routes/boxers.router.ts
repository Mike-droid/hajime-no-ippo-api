import express, { Request, Response } from 'express';
const router = express.Router();

import BoxerService from '../services/boxers.service';
const service = new BoxerService();

router.get('/', async (req: Request, res: Response) => {
  try {
    const boxers = await service.findAllBoxers()
    res.json(boxers)
  } catch (error) {
    console.error('An error ocurred: ', error)
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const boxer = await service.findBoxerById(id);
    res.json(boxer)
  } catch (error) {
    return {
      status: 404,
      message: error
    }
  }
});

export default router;
