import { Router } from "express";
import {
  createRecepcionista,
  getAllRecepcionistas,
  getRecepcionistaById,
  updateRecepcionista,
  deleteRecepcionista,
} from "../controllers/recepcionistaControllers";

const router = Router();
