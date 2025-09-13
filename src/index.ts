import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000; 

app.use(express.json());

type User = {
    cpf: number;
    name: string;
    ocupacion: string;
}

type Consultation = {
    id: number;
    namePacient: string;
    nameDoctor: string;
    data: number;
}

const users: User[] = [
    {
        cpf: 12290389312,
        name: "Matheus",
        ocupacion: "Doctor"
    },
    {
        cpf: 12365498700,
        name: "Carlos",
        ocupacion: "Secretary"
    },
    {
        cpf: 76553412322,
        name: "Olmar",
        ocupacion: "Patient"
    }
]



app.get("/", (req: Request, res: Response) => {
    console.log("Bem vindo ao consultório!");
})

app.listen(port, () => {
    console.log(`A API está rodando na ${port}`);
})