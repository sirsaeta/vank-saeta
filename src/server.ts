import express, { Express, RequestHandler } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const jsonParser = bodyParser.json()

const port = process.env.PORT;

export const startExpressServer = (
    handlers: RequestHandler | RequestHandler[]
) => {
    const app: Express = express();

    app.use(cors());

    app.use('/', jsonParser, handlers);
    
    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
}