"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addItemToMenuSchema = exports.createMenuSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.createMenuSchema = zod_1.default.object({
    name: zod_1.default.string(),
    description: zod_1.default.string(),
});
exports.addItemToMenuSchema = zod_1.default.object({
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    price: zod_1.default.number(),
});
