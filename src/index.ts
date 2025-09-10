import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000; 

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    console.log("Bem vindo ao consultório!");
})

app.listen(port, () => {
    console.log(`A API está rodando na ${port}`);
})