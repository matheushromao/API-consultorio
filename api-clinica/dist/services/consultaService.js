"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.getById = exports.getAll = exports.create = void 0;
const prisma_1 = require("../database/prisma");
const create = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { pacienteId, fisioterapeutaId } = data;
    const paciente = yield prisma_1.prisma.paciente.findUnique({
        where: { id: pacienteId },
    });
    if (!paciente)
        throw new Error("Paciente não encontrado");
    const fisioterapeuta = yield prisma_1.prisma.fisioterapeuta.findUnique({
        where: { id: fisioterapeutaId },
    });
    if (!fisioterapeuta)
        throw new Error("Fisioterapeuta não encontrado");
    return prisma_1.prisma.consulta.create({
        data: Object.assign(Object.assign({}, data), { dataHora: new Date(data.dataHora) }),
    });
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.consulta.findMany({
        include: {
            paciente: { select: { nome: true, cpf: true } },
            fisioterapeuta: { select: { nome: true, especialidade: true } },
        },
    });
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.consulta.findUnique({
        where: { id },
        include: { paciente: true, fisioterapeuta: true },
    });
});
exports.getById = getById;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.consulta.update({
        where: { id },
        data: Object.assign(Object.assign({}, data), { dataHora: data.dataHora ? new Date(data.dataHora) : undefined }),
    });
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.consulta.delete({ where: { id } });
});
exports.remove = remove;
