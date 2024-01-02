import { Router } from "express";
import { addStory, getStories, searchStories } from "../controllers/story.js";

const router = Router();

router.route("/").post(addStory).get(getStories);
router.get("/search", searchStories);

export default router;
