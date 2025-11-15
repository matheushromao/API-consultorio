import { Request, Response } from "express";
import * as fisioterapeutaService from "../services/fisioterapeutaService";

export const createFisioterapeuta = async (req: Request, res: Response) => {
  try {
    const fisioterapeuta = await fisioterapeutaService.create(req.body);
    return res.status(201).json(fisioterapeuta);
  } catch (error: any) {
    if (error.code === "P2002")
      return res
        .status(409)
        .json({ message: `Campo único já existe: ${error.meta.target}` });
    return res.status(500).json({ message: error.message });
  }
};

export const getAllFisioterapeutas = async (req: Request, res: Response) => {
  try {
    const fisioterapeutas = await fisioterapeutaService.getAll();
    return res.json(fisioterapeutas);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFisioterapeutaById = async (req: Request, res: Response) => {
  try {
    const fisioterapeuta = await fisioterapeutaService.getById(
      Number(req.params.id)
    );
    if (!fisioterapeuta)
      return res
        .status(404)
        .json({ message: "Fisioterapeuta não encontrado(a)." });
    return res.json(fisioterapeuta);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFisioterapeuta = async (req: Request, res: Response) => {
  try {
    const fisioterapeuta = await fisioterapeutaService.update(
      Number(req.params.id),
      req.body
    );
    return res.status(200).json(fisioterapeuta);
  } catch (error: any) {
    if (error.code === "P2025")
      return res
        .status(404)
        .json({ message: "Fisioterapeuta não encontrado(a)." });
    if (error.code === "P2002")
      return res.status(409).json({ message: "Campo único já existe!" });
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFisioterapeuta = async (req: Request, res: Response) => {
  try {
    await fisioterapeutaService.remove(Number(req.params.id));
    return res
      .status(200)
      .json({ message: "Fisioterapeuta deletado(a) com sucesso." });
  } catch (error: any) {
    if (error.code === "P2025")
      return res
        .status(404)
        .json({ message: "Fisioterapeuta não encontrado(a)." });
    return res.status(500).json({ message: error.message });
  }
};
