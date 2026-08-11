import { prisma } from "../database/prisma";
import { Fisioterapeuta } from "../generated/prisma";
import bcrypt from "bcryptjs";

type FisioterapeutaCreateData = Omit<
  Fisioterapeuta,
  "id" | "createdAt" | "updatedAt"
>;
type FisioterapeutaUpdateData = Partial<FisioterapeutaCreateData>;

// Campos retornados nas respostas: nunca expõe a senha
const camposPublicos = {
  id: true,
  nome: true,
  email: true,
  cpf: true,
  crm: true,
  especialidade: true,
  createdAt: true,
  updatedAt: true,
};

export const create = async (
  data: FisioterapeutaCreateData
): Promise<Omit<Fisioterapeuta, "senha">> => {
  const hashSenha = await bcrypt.hash(data.senha, 10);
  return prisma.fisioterapeuta.create({
    data: { ...data, senha: hashSenha },
    select: camposPublicos,
  });
};

export const getAll = async (): Promise<Omit<Fisioterapeuta, "senha">[]> => {
  return prisma.fisioterapeuta.findMany({ select: camposPublicos });
};

export const getById = async (
  id: number
): Promise<Omit<Fisioterapeuta, "senha"> | null> => {
  return prisma.fisioterapeuta.findUnique({
    where: { id },
    select: camposPublicos,
  });
};

export const update = async (
  id: number,
  data: FisioterapeutaUpdateData
): Promise<Omit<Fisioterapeuta, "senha">> => {
  const { senha, ...outrosCampos } = data;
  return prisma.fisioterapeuta.update({
    where: { id },
    data: senha
      ? { ...outrosCampos, senha: await bcrypt.hash(senha, 10) }
      : outrosCampos,
    select: camposPublicos,
  });
};

export const remove = async (
  id: number
): Promise<Omit<Fisioterapeuta, "senha">> => {
  return prisma.fisioterapeuta.delete({
    where: { id },
    select: camposPublicos,
  });
};
