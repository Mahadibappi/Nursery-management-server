import express, { Application, Request, Response } from "express";
import cors from "cors";
import categoryRoute from "./app/router/categoryRoute";
import productRoute from "./app/router/productRoutes";
import paymentRoute from "./app/router/paymentRoute";

const app: Application = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cors({ origin: ["http://localhost:5173"], credentials: true }));

//routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/payment", paymentRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Nursery Server Running");
});
export default app;
