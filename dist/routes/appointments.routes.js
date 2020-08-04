"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentsRouter = express_1.Router();
appointmentsRouter.post('/', function (request, response) {
    return response.json({ message: 'hello world' });
});
exports.default = appointmentsRouter;
