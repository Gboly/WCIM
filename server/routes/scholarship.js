import { Router } from "express";
import {
  addScholarshipApplication,
  //getScholarshipApplications,
} from "../controllers/scholarship.js";

const router = Router();

router.route("/").post(addScholarshipApplication);
//.get(getScholarshipApplications);

export default router;
