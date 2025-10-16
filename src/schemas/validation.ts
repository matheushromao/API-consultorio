import { number, z } from "zod";
import { es } from "zod/v4/locales";

// Schema para Recepcionista
export const createRecepcionistaSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .max(100, "Email deve ter no máximo 100 caracteres"),
  senha: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(20, "Senha deve ter no máximo 20 caracteres"),
  telefone: z
    .string()
    .min(11, "Telefone deve ter no mínimo 11 dígitos")
    .optional(),
});

export const updateRecepcionistaSchema = createRecepcionistaSchema.partial();

// Schema para fisioterapeuta
export const createFisioterapeutaSchema = z.object({
  nome: z
    .string()
    .min(1, "Nome é obrigatório")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email({ message: "Email inválido" })
    .max(100, "Email deve ter no máximo 100 caracteres"),
  senha: z
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .max(20, "Senha deve ter no máximo 20 caracteres"),
  telefone: z
    .string()
    .min(11, "Telefone deve ter no mínimo 11 dígitos")
    .optional(),
  cpf: z
    .string()
    .length(11, "CPF deve ter exatamente 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  crm: z
    .string()
    .min(5, "CRM deve ter no mínimo 5 caracteres")
    .max(100, "CRM deve ter no máximo 100 caracteres"),
  especialidade: z
    .string()
    .min(3, "Especialidade deve ter no mínimo 3 caracteres")
    .max(100, "Especialidade deve ter no máximo 100 caracteres"),
});

export const updateFisioterapeutaSchema = createFisioterapeutaSchema.partial();

// Schema para Paciente

export const createPacienteSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email({ message: "Email deve ter um formato válido" })
    .max(255, "Email deve ter no máximo 255 caracteres"),
  cpf: z
    .string()
    .length(11, "CPF deve ter exatamente 11 dígitos")
    .regex(/^\d+$/, "CPF deve conter apenas números"),
  telefone: z
    .string()
    .min(11, "Telefone deve ter pelo menos 11 caracteres")
    .max(15, "Telefone deve ter no máximo 15 caracteres")
    .optional(),
  dataNascimento: z
    .string()
    .refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    }, "Data de nascimento deve ser uma data válida")
    .refine((date) => {
      const parsedDate = new Date(date);
      const today = new Date();
      return parsedDate < today;
    }, "Data de nascimento deve ser no passado"),
});

export const updatePacienteSchema = createPacienteSchema.partial();

// Schema para Consulta

export const createConsultaSchema = z.object({
  dataHora: z
    .string()
    .refine((date) => {
      const parsedDate = new Date(date);
      return !isNaN(parsedDate.getTime());
    }, "Data e hora deve ser uma data válida")
    .refine((date) => {
      const parsedDate = new Date(date);
      const now = new Date();
      return parsedDate > now;
    }, "Data e hora deve ser no futuro"),
  pacienteId: z
    .number()
    .int("ID do paciente deve ser um número inteiro")
    .positive("ID do paciente deve ser positivo"),
  medicoId: z
    .number()
    .int("ID do médico deve ser um número inteiro")
    .positive("ID do médico deve ser positivo"),
  motivo: z
    .string()
    .max(500, "Motivo deve ter no máximo 500 caracteres")
    .optional(),
});

export const updateConsultaSchema = createConsultaSchema.partial();

// Schema para validação de IDs

export const idParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID deve ser um número inteiro positivo")
    .transform(Number)
    .refine((num) => num > 0, "ID deve ser um número inteiro positivo"),
});

// Tipos TypeScript derivados dos schemas
export type CreateSecretarioData = z.infer<typeof createRecepcionistaSchema>;
export type UpdateSecretarioData = z.infer<typeof updateRecepcionistaSchema>;
export type CreateMedicoData = z.infer<typeof createFisioterapeutaSchema>;
export type UpdateMedicoData = z.infer<typeof updateFisioterapeutaSchema>;
export type CreatePacienteData = z.infer<typeof createPacienteSchema>;
export type UpdatePacienteData = z.infer<typeof updatePacienteSchema>;
export type CreateConsultaData = z.infer<typeof createConsultaSchema>;
export type UpdateConsultaData = z.infer<typeof updateConsultaSchema>;
export type IdParam = z.infer<typeof idParamSchema>;
