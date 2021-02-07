"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var AppServer = /** @class */ (function () {
    function AppServer() {
        this.express = express_1.default();
        this.middlewares();
        this.routes();
    }
    AppServer.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
    };
    AppServer.prototype.routes = function () {
        this.express.use(routes_1.default);
    };
    return AppServer;
}());
exports.default = new AppServer().express;
