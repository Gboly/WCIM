import Story from "../models/story.js";

const skipLimit = ["start", "end"];
const fixQuery = (query) => {
  return Object.entries(query).reduce((accum, [key, value]) => {
    !skipLimit.includes(key) && (accum = { ...accum, [key]: value });
    return accum;
  }, {});
};

export const addStory = async (req, res) => {
  try {
    const story = new Story({
      ...req.body,
      snippet: req.body?.story[0].slice(0, 300),
    });
    await story.save();

    res.status(200).json(story);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

export const getStories = async (req, res) => {
  const { start, end } = req.query;
  try {
    const stories = await Story.find(fixQuery(req.query))
      .sort({ date: -1 })
      .skip(start)
      .limit(end);

    res.status(200).json(stories);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
