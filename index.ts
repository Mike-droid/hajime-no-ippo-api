import express, { Express, Request, Response } from 'express';
import cors from 'cors';
//import dotenv from 'dotenv';
import routerApi from './routes';

//dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
app.use(express.json())
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('express + typescript server is running!');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
