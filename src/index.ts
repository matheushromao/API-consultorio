import express from "express";
import { Express, Request, Response } from "express";

const app: Express = express();
const port: number = 3000; 


app.get("/", (req, res) => {
    console.log("Hello world!");
})

app.listen()