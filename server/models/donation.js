import mongoose from "mongoose";

const schema = mongoose.Schema;

const donationSchema = schema({
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  email: { type: String, default: "" },
  country: { type: String, default: "" },
  state: { type: String, default: "" },
  amount: { type: String, default: "0" },
  currency: { type: String, enum: ["NGN", "USD"], default: "" },
  date: { type: Date, default: new Date() },
});

const Donation = mongoose.model("donation", donationSchema);

export default Donation;
