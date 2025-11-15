import { prisma } from "../database/prisma";
import { Recepcionista } from "../generated/prisma";
import bcrypt from "bcryptjs";

type RecepcionistaCreateData = Omit<
  Recepcionista,
  "id" | "createdAt" | "updatedAt"
>;
type RecepcionistaUpdateData = Partial<
  Omit<Recepcionista, "id" | "createdAt" | "updatedAt" | "senha">
>;

export const create = async (
  data: RecepcionistaCreateData
): Promise<Omit<Recepcionista, "senha">> => {
  const hashSenha = await bcrypt.hash(data.senha, 10);
  const recepcionista = await prisma.recepcionista.create({
    data: { ...data, senha: hashSenha },
  });
  const { senha, ...recepcionistaSemSenha } = recepcionista;
  return recepcionistaSemSenha;
};

export const getAll = async (): Promise<Omit<Recepcionista, "senha">[]> => {
  return prisma.recepcionista.findMany({
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const getById = async (
  id: number
): Promise<Omit<Recepcionista, "senha"> | null> => {
  return prisma.recepcionista.findUnique({
    where: { id },
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const update = async (
  id: number,
  data: RecepcionistaUpdateData
): Promise<Omit<Recepcionista, "senha">> => {
  return prisma.recepcionista.update({
    where: { id },
    data,
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const remove = async (id: number): Promise<Recepcionista> => {
  return prisma.recepcionista.delete({ where: { id } });
};

export const getByLogin = async (
  email: string,
  senha: string
): Promise<Omit<Recepcionista, "senha"> | null> => {
  return prisma.recepcionista.findFirst({
    where: { email: email, senha: senha },
  });
};
