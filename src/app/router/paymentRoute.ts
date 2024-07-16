import { Router } from "express";
import payment from "../controller/paymentController";

const router = Router();

router.post("/", payment);

export default router;
