import express, { Application, Request, Response } from "express";
import cors from "cors";
import categoryRoute from "./app/router/categoryRoute";
import productRoute from "./app/router/productRoutes";

const app: Application = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/products", productRoute);
app.use("/api/v1/category", categoryRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Nursery Server Running");
});
export default app;
