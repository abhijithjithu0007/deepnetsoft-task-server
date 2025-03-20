"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandardResponse = void 0;
class StandardResponse {
    constructor(message, data, statusCode = 200) {
        this.statusCode = statusCode;
        this.status = "success";
        this.message = message;
        this.data = data;
    }
}
exports.StandardResponse = StandardResponse;
