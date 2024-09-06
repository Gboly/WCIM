import { Router } from "express";
import {
  initializePayment,
  //verifyPayment,
} from "../controllers/stripePayment.js";

const router = Router();

router.post("/initialize", initializePayment);
//router.post("/verify", verifyPayment);

export default router;
