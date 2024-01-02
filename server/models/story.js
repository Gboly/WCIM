import mongoose from "mongoose";

const schema = mongoose.Schema;

const storySchema = schema({
  poster: { type: String, required: true },
  name: { type: String, required: true, index: "text" },
  title: { type: String, required: true, index: "text" },
  snippet: { type: String, required: true, index: "text" },
  story: { type: [schema.Types.Mixed], required: true, index: "text" },
  category: { type: String, required: true, index: "text" },
  url: { type: String, required: true },
  keywords: { type: [{ type: String }], required: true, index: "text" },
  createdAt: { type: Date, default: new Date() },
});

// storySchema.index(
//   ["name", "title", "story", "category", "keywords"].reduce((accum, key) => {
//     accum = { ...accum, [key]: "text" };
//     return accum;
//   }, {})
// );

const Story = mongoose.model("story", storySchema);

export default Story;
