import { Request, Response } from "express";
import * as recepcionistaService from "../services/recepcionistaService";

export const createRecepcionista = async (req: Request, res: Response) => {
  try {
    const recepcionista = await recepcionistaService.create(req.body);
    return res.status(201).json(recepcionista);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email já cadastrado" });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getAllRecepcionistas = async (req: Request, res: Response) => {
  try {
    const recepcionista = await recepcionistaService.getAll();
    return res.json(recepcionista);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getRecepcionistaById = async (req: Request, res: Response) => {
  try {
    const recepcionista = await recepcionistaService.getById(
      Number(req.params.id)
    );
    return res.json(recepcionista);
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Recepcionista não encontrado" });
    if (error.code === "P2002")
      return res.status(409).json({ message: "Email já cadastrado" });
    return res.status(500).json({ message: error.message });
  }
};

export const updateRecepcionista = async (req: Request, res: Response) => {
  try {
    const recepcionista = await recepcionistaService.update(
      Number(req.params.id),
      req.body
    );
    return res.status(200).json(recepcionista);
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Recepcionista não encontrado" });
    return res.status(500).json({ message: error.message });
  }
};

export const deleteRecepcionista = async (req: Request, res: Response) => {
  try {
    await recepcionistaService.remove(Number(req.params.id));
    return res
      .status(200)
      .json({ message: "Recepcionista deletado com sucesso" });
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Recepcionista não encontrado" });
    return res.status(500).json({ message: error.message });
  }
};

export const getRecepcionistaByLogin = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    const recepcionista = await recepcionistaService.getByLogin(email, senha);
    if (!recepcionista) {
      return res.status(404).json({ message: "Credenciais inválidas" });
    }
    return res.json(recepcionista);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};
