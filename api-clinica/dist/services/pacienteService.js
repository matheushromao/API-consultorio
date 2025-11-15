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
    return prisma_1.prisma.paciente.create({
        data: Object.assign(Object.assign({}, data), { dataNascimento: new Date(data.dataNascimento) }),
    });
});
exports.create = create;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.paciente.findMany();
});
exports.getAll = getAll;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.paciente.findUnique({ where: { id } });
});
exports.getById = getById;
const update = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.paciente.update({
        where: { id },
        data: Object.assign(Object.assign({}, data), { dataNascimento: data.dataNascimento
                ? new Date(data.dataNascimento)
                : undefined }),
    });
});
exports.update = update;
const remove = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return prisma_1.prisma.paciente.delete({ where: { id } });
});
exports.remove = remove;
