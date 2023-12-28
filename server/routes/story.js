import { Router } from "express";
import { addStory, getStories } from "../controllers/story.js";

const router = Router();

router.route("/").post(addStory).get(getStories);

export default router;
