import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000; 

app.use(express.json());

type User = {
    cpf: number;
    name: string;
    occupacion: string;
}

type Consultation = {
    id: number;
    namePacient: string;
    nameDoctor: string;
    data: Date;
}

const users: User[] = [
    {
        cpf: 12290389312,
        name: "Matheus",
        occupacion: "Doctor"
    },
    {
        cpf: 12365498700,
        name: "Carlos",
        occupacion: "Secretary"
    },
    {
        cpf: 76553412322,
        name: "Olmar",
        occupacion: "Patient"
    }
];

const queries: Consultation[] = [
    {
        id: 1,
        namePacient: "Olmar",
        nameDoctor: "Matheus",
        data: new Date("2025-09-05")
    }
];

app.get("/", (req: Request, res: Response) => {
    console.log("Bem vindo ao consultório!");
})

app.listen(port, () => {
    console.log(`A API está rodando na ${port}`);
})