"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT || 5000;
var path_1 = __importDefault(require("path"));
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
app.listen(PORT, function () { return console.log('\x1b[34m', "Server listening on port " + PORT); });
