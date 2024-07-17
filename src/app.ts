import express, { Application, Request, Response } from "express";
import cors from "cors";
import categoryRoute from "./app/router/categoryRoute";
import productRoute from "./app/router/productRoutes";
import paymentRoute from "./app/router/paymentRoute";

const app: Application = express();

//middlewares
app.use(express.json());
app.use(cors());
const allowedOrigins = ["http://localhost:5173", "http://localhost:5000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  })
);

//routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/payment", paymentRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Nursery Server Running");
});
export default app;
