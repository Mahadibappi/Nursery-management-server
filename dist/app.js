"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const categoryRoute_1 = __importDefault(require("./app/router/categoryRoute"));
const productRoutes_1 = __importDefault(require("./app/router/productRoutes"));
const paymentRoute_1 = __importDefault(require("./app/router/paymentRoute"));
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const allowedOrigins = ["http://localhost:5173", "http://localhost:5000"];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
}));
//routes
app.use("/api/v1/products", productRoutes_1.default);
app.use("/api/v1/category", categoryRoute_1.default);
app.use("/api/v1/payment", paymentRoute_1.default);
app.get("/", (req, res) => {
    res.send("Nursery Server Running");
});
exports.default = app;
