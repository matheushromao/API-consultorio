"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idParamSchema = exports.updateConsultaSchema = exports.createConsultaSchema = exports.updatePacienteSchema = exports.createPacienteSchema = exports.updateFisioterapeutaSchema = exports.createFisioterapeutaSchema = exports.updateRecepcionistaSchema = exports.createRecepcionistaSchema = void 0;
const zod_1 = require("zod");
// Schema para Recepcionista
exports.createRecepcionistaSchema = zod_1.z.object({
    nome: zod_1.z
        .string()
        .min(1, "Nome é obrigatório")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: zod_1.z
        .string()
        .email({ message: "Email inválido" })
        .max(100, "Email deve ter no máximo 100 caracteres"),
    senha: zod_1.z
        .string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres"),
    telefone: zod_1.z
        .string()
        .min(11, "Telefone deve ter no mínimo 11 dígitos")
        .optional(),
    cpf: zod_1.z
        .string()
        .length(11, "CPF deve ter exatamente 11 dígitos")
        .regex(/^\d+$/, "CPF deve conter apenas números"),
});
exports.updateRecepcionistaSchema = exports.createRecepcionistaSchema.partial();
// Schema para fisioterapeuta
exports.createFisioterapeutaSchema = zod_1.z.object({
    nome: zod_1.z
        .string()
        .min(1, "Nome é obrigatório")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: zod_1.z
        .string()
        .email({ message: "Email inválido" })
        .max(100, "Email deve ter no máximo 100 caracteres"),
    senha: zod_1.z
        .string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .max(20, "Senha deve ter no máximo 20 caracteres"),
    telefone: zod_1.z
        .string()
        .min(11, "Telefone deve ter no mínimo 11 dígitos")
        .optional(),
    cpf: zod_1.z
        .string()
        .length(11, "CPF deve ter exatamente 11 dígitos")
        .regex(/^\d+$/, "CPF deve conter apenas números"),
    crm: zod_1.z
        .string()
        .min(5, "CRM deve ter no mínimo 5 caracteres")
        .max(100, "CRM deve ter no máximo 100 caracteres"),
    especialidade: zod_1.z
        .string()
        .min(3, "Especialidade deve ter no mínimo 3 caracteres")
        .max(100, "Especialidade deve ter no máximo 100 caracteres"),
});
exports.updateFisioterapeutaSchema = exports.createFisioterapeutaSchema.partial();
// Schema para Paciente
exports.createPacienteSchema = zod_1.z.object({
    nome: zod_1.z
        .string()
        .min(2, "Nome deve ter pelo menos 2 caracteres")
        .max(100, "Nome deve ter no máximo 100 caracteres"),
    email: zod_1.z
        .string()
        .email({ message: "Email deve ter um formato válido" })
        .max(255, "Email deve ter no máximo 255 caracteres"),
    cpf: zod_1.z
        .string()
        .length(11, "CPF deve ter exatamente 11 dígitos")
        .regex(/^\d+$/, "CPF deve conter apenas números"),
    telefone: zod_1.z
        .string()
        .min(11, "Telefone deve ter pelo menos 11 caracteres")
        .max(15, "Telefone deve ter no máximo 15 caracteres")
        .optional(),
    dataNascimento: zod_1.z
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
exports.updatePacienteSchema = exports.createPacienteSchema.partial();
// Schema para Consulta
exports.createConsultaSchema = zod_1.z.object({
    dataHora: zod_1.z
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
    pacienteId: zod_1.z
        .number()
        .int("ID do paciente deve ser um número inteiro")
        .positive("ID do paciente deve ser positivo"),
    medicoId: zod_1.z
        .number()
        .int("ID do médico deve ser um número inteiro")
        .positive("ID do médico deve ser positivo"),
    motivo: zod_1.z
        .string()
        .max(500, "Motivo deve ter no máximo 500 caracteres")
        .optional(),
});
exports.updateConsultaSchema = exports.createConsultaSchema.partial();
// Schema para validação de IDs
exports.idParamSchema = zod_1.z.object({
    id: zod_1.z
        .string()
        .regex(/^\d+$/, "ID deve ser um número inteiro positivo")
        .transform(Number)
        .refine((num) => num > 0, "ID deve ser um número inteiro positivo"),
});
