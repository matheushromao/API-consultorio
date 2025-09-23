import express, { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000;

app.use(express.json());

type User = {
  numId: number;
  cpf: number;
  name: string;
  occupacion: string;
};

type Consultation = {
  id: number;
  namePacient: string;
  nameDoctor: string;
  data: Date;
};

const users: User[] = [
  {
    numId: 1,
    cpf: 12290389312,
    name: "Matheus",
    occupacion: "Doctor",
  },
  {
    numId: 2,
    cpf: 12365498700,
    name: "Carlos",
    occupacion: "Secretary",
  },
  {
    numId: 3,
    cpf: 76553412322,
    name: "Olmar",
    occupacion: "Patient",
  },
];

const queries: Consultation[] = [
  {
    id: 1,
    namePacient: "Olmar",
    nameDoctor: "Matheus",
    data: new Date("2025-09-05"),
  },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Bem vindo ao consultório!");
});

app.get("/users", (req: Request, res: Response) => {
  res.json(users);
});

app.get("/users/:numId", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.numId);

  if (isNaN(userId) || userId <= 0) {
    return res.status(404).json("Id não encontrado, digite outro!");
  }

  const userFound: User | undefined = users.find(
    (user) => user.numId == userId
  );
  if (!userFound) {
    return res.status(404).json("Usuário não encontrado, tente novamente!");
  }
  res.json(userFound);
});

app.post("/users", (req: Request, res: Response) => {
  const { cpf, name, occupacion } = req.body;

  const maxId: number = users.reduce(
    (max, user) => (user.numId > max ? user.numId : max),
    0
  );
  const newUser: User = {
    numId: maxId + 1,
    cpf,
    name,
    occupacion,
  };
  users.push(newUser);
  res.status(201).json(users);
});

app.put("/users/:numId", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.numId);
  const { cpf, name, occupacion } = req.body;

  const userIndex: number = users.findIndex((user) => user.numId === userId);
  if (userIndex === -1) {
    return res.status(404).json("Usuário não encontrado, tente novamente!");
  }

  const updateUser: User = { numId: userId, cpf, name, occupacion };
  users[userIndex] = updateUser;
  res.json(users);
});

app.delete("/users/:numId", (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.numId);

  const userIndex: number = users.findIndex((user) => user.numId === userId);
  if (userIndex === -1) {
    return res.status(404).json("Usuário não encontrado, tente novamente!");
  }

  users.slice(userIndex);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`A API está rodando na ${port}`);
});
