"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const categoryRoute_1 = __importDefault(require("./app/router/categoryRoute"));
const productRoutes_1 = __importDefault(require("./app/router/productRoutes"));
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//routes
app.use("/api/v1/products", productRoutes_1.default);
app.use("/api/v1/category", categoryRoute_1.default);
app.get("/", (req, res) => {
    res.send("Nursery Server Running");
});
exports.default = app;
