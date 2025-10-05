import { prisma } from "../database/prisma";
import { Fisioterapeuta } from "../generated/prisma";

type FisioterapeutaCreateData = Omit<
  Fisioterapeuta,
  "id" | "createdAt" | "updatedAt"
>;
type FisioterapeutaUpdateData = Partial<FisioterapeutaCreateData>;

export const create = async (
  data: FisioterapeutaCreateData
): Promise<Fisioterapeuta> => {
  return prisma.fisioterapeuta.create({ data });
};

export const getAll = async (): Promise<Fisioterapeuta[]> => {
  return prisma.fisioterapeuta.findMany();
};

export const getById = async (id: number): Promise<Fisioterapeuta | null> => {
  return prisma.fisioterapeuta.findUnique({ where: { id } });
};

export const update = async (
  id: number,
  data: FisioterapeutaUpdateData
): Promise<Fisioterapeuta> => {
  return prisma.fisioterapeuta.update({ where: { id }, data });
};

export const remove = async (id: number): Promise<Fisioterapeuta> => {
  return prisma.fisioterapeuta.delete({ where: { id } });
};
