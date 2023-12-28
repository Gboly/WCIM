import mongoose from "mongoose";

const schema = mongoose.Schema;

const storySchema = schema({
  poster: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  snippet: { type: String, required: true },
  story: { type: [schema.Types.Mixed], required: true },
  category: { type: String, required: true },
  url: { type: String, required: true },
  keywords: { type: [{ type: String }], required: true },
  createdAt: { type: Date, default: new Date() },
});

const Story = mongoose.model("story", storySchema);

export default Story;
