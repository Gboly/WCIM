import { Router } from "express";
import {
  initializePayment,
  verifyPayment,
} from "../controllers/paystackPayment.js";

const router = Router();

router.post("/initialize", initializePayment);
router.post("/verify", verifyPayment);

export default router;
